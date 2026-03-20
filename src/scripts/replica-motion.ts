import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let teardownFns: Array<() => void> = [];

const clearTeardowns = () => {
  teardownFns.forEach((fn) => {
    try {
      fn();
    } catch {
      // noop
    }
  });

  teardownFns = [];
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setupAutoplayVideos = () => {
  const videos = document.querySelectorAll("video[autoplay]");

  videos.forEach((video) => {
    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    const requestedStartTime = Number.parseFloat(video.dataset.startTime ?? "");
    let startTimeApplied = false;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;
    video.controls = false;
    video.removeAttribute("controls");
    video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");

    const ensurePlaying = () => {
      void video.play().catch(() => {});
    };

    const maybeApplyStartTime = () => {
      if (startTimeApplied || !Number.isFinite(requestedStartTime) || requestedStartTime <= 0) {
        return;
      }

      if (video.readyState >= 1) {
        try {
          video.currentTime = Math.min(requestedStartTime, Math.max(video.duration - 0.05, requestedStartTime));
          startTimeApplied = true;
        } catch {
          // Some browsers block currentTime updates until metadata is ready enough.
        }
      }
    };

    const handleLoadedMetadata = () => {
      maybeApplyStartTime();
      ensurePlaying();
    };

    const handleCanPlay = () => {
      maybeApplyStartTime();
      ensurePlaying();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    if (video.paused) {
      maybeApplyStartTime();
      ensurePlaying();
    }

    teardownFns.push(() => video.removeEventListener("loadedmetadata", handleLoadedMetadata));
    teardownFns.push(() => video.removeEventListener("canplay", handleCanPlay));
  });
};

const setupLiftIns = (reducedMotion: boolean) => {
  const elements = Array.from(document.querySelectorAll("[data-lift]")).filter(
    (element): element is HTMLElement => element instanceof HTMLElement,
  );

  if (!elements.length) {
    return;
  }

  if (reducedMotion) {
    gsap.set(elements, { y: 0 });
    return;
  }

  elements.forEach((element, index) => {
    gsap.set(element, { y: 26 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 84%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: (index % 3) * 0.04,
        });
      },
    });
  });
};

const setupHomeMotion = (reducedMotion: boolean) => {
  const page = document.querySelector(".home-replica");
  if (!(page instanceof HTMLElement)) {
    return;
  }

  const hero = page.querySelector("[data-home-hero]");
  const heroItems = Array.from(page.querySelectorAll("[data-home-stagger]")).filter(
    (element): element is HTMLElement => element instanceof HTMLElement,
  );
  const discoveryBand = page.querySelector("[data-home-discovery]");
  const contactBand = page.querySelector("[data-home-contact]");
  const contactTrigger = page.querySelector("[data-contact-trigger]");
  const revealBlocks = Array.from(page.querySelectorAll("[data-home-reveal]")).filter(
    (element): element is HTMLElement => element instanceof HTMLElement,
  );

  if ((contactTrigger instanceof HTMLButtonElement || contactTrigger instanceof HTMLAnchorElement) && contactBand instanceof HTMLElement) {
    const handleClick = (event: Event) => {
      if (contactTrigger instanceof HTMLAnchorElement) {
        event.preventDefault();

        const href = contactTrigger.getAttribute("href");
        if (href?.startsWith("#")) {
          window.history.replaceState(null, "", href);
        }
      }

      contactBand.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    };

    contactTrigger.addEventListener("click", handleClick);
    teardownFns.push(() => contactTrigger.removeEventListener("click", handleClick));
  }

  if (reducedMotion) {
    gsap.set(heroItems, { autoAlpha: 1, y: 0 });
    gsap.set(revealBlocks, { y: 0 });
    return;
  }

  if (hero instanceof HTMLElement && heroItems.length) {
    gsap.set(heroItems, { autoAlpha: 0, y: 26 });
    gsap.timeline({ defaults: { ease: "power3.out", duration: 0.95 } }).to(heroItems, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.09,
    });
  }

  [
    {
      trigger: discoveryBand,
      items: revealBlocks.filter((element) => element.closest("[data-home-discovery]")),
    },
    {
      trigger: contactBand,
      items: revealBlocks.filter((element) => element.closest("[data-home-contact]")),
    },
  ].forEach(({ trigger, items }) => {
    if (!(trigger instanceof HTMLElement) || !items.length) {
      return;
    }

    gsap.set(items, { y: 40 });

    ScrollTrigger.create({
      trigger,
      start: "top 82%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
        });
      },
    });
  });
};

const setupSectionRails = () => {
  const roots = document.querySelectorAll("[data-section-rail-root]");

  roots.forEach((root) => {
    if (!(root instanceof HTMLElement)) {
      return;
    }

    const links = Array.from(root.querySelectorAll("[data-rail-link]")).filter(
      (link): link is HTMLButtonElement => link instanceof HTMLButtonElement,
    );

    const panels = links
      .map((link) => {
        const id = link.dataset.target;
        if (!id) {
          return null;
        }

        const panel = root.querySelector(`[data-section-id="${id}"]`) ?? document.getElementById(`rail-panel-${id}`);
        if (!(panel instanceof HTMLElement)) {
          return null;
        }

        return { id, link, panel };
      })
      .filter(Boolean);

    if (!panels.length) {
      return;
    }

    const activate = (id: string, updateHash = true) => {
      panels.forEach((item) => {
        const isActive = item.id === id;
        item.link.classList.toggle("is-active", isActive);
        item.link.setAttribute("aria-selected", isActive ? "true" : "false");
        item.link.tabIndex = isActive ? 0 : -1;
        item.panel.hidden = !isActive;
        item.panel.setAttribute("aria-hidden", isActive ? "false" : "true");
        item.panel.toggleAttribute("data-active-panel", isActive);
      });

      if (updateHash && typeof window.history.replaceState === "function") {
        const next = new URL(window.location.href);
        next.hash = id;
        window.history.replaceState(null, "", next);
      }
    };

    const initialHash = window.location.hash.replace(/^#/, "");
    const defaultPanel = root.dataset.defaultPanel ?? panels[0]?.id ?? "";
    const initialPanel = panels.some((item) => item.id === initialHash) ? initialHash : defaultPanel;

    activate(initialPanel, false);

    const handleClick = (event: Event) => {
      if (event.currentTarget instanceof HTMLButtonElement) {
        const target = event.currentTarget.dataset.target || defaultPanel;
        activate(target);
      }
    };

    const moveFocus = (currentIndex: number, nextIndex: number) => {
      const item = panels[nextIndex];
      if (!item) {
        return;
      }

      activate(item.id, false);
      item.link.focus();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (!(event.currentTarget instanceof HTMLButtonElement)) {
        return;
      }

      const currentIndex = panels.findIndex((item) => item.link === event.currentTarget);
      if (currentIndex < 0) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        moveFocus(currentIndex, (currentIndex + 1) % panels.length);
        return;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        moveFocus(currentIndex, (currentIndex - 1 + panels.length) % panels.length);
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        moveFocus(currentIndex, 0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        moveFocus(currentIndex, panels.length - 1);
      }
    };

    panels.forEach((item) => item.link.addEventListener("click", handleClick));
    panels.forEach((item) => item.link.addEventListener("keydown", handleKeydown));

    teardownFns.push(() => panels.forEach((item) => item.link.removeEventListener("click", handleClick)));
    teardownFns.push(() => panels.forEach((item) => item.link.removeEventListener("keydown", handleKeydown)));
  });
};

const bootReplicaMotion = () => {
  clearTeardowns();

  const reducedMotion = prefersReducedMotion();
  setupAutoplayVideos();
  setupLiftIns(reducedMotion);
  setupHomeMotion(reducedMotion);
  setupSectionRails();
};

document.addEventListener("DOMContentLoaded", bootReplicaMotion);
document.addEventListener("astro:page-load", bootReplicaMotion);
