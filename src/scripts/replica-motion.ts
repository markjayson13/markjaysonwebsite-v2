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

  if (contactTrigger instanceof HTMLButtonElement && contactBand instanceof HTMLElement) {
    const handleClick = () => {
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
      (link): link is HTMLAnchorElement => link instanceof HTMLAnchorElement,
    );

    const sections = links
      .map((link) => {
        const id = link.dataset.target;
        if (!id) {
          return null;
        }

        const section = root.querySelector(`[data-section-id="${id}"]`) ?? document.getElementById(id);
        if (!(section instanceof HTMLElement)) {
          return null;
        }

        return { id, link, section };
      })
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const activate = (id: string) => {
      sections.forEach((item) => {
        const isActive = item.id === id;
        item.link.classList.toggle("is-active", isActive);
        if (isActive) {
          item.link.setAttribute("aria-current", "location");
        } else {
          item.link.removeAttribute("aria-current");
        }
      });
    };

    const syncFromScroll = () => {
      let current = sections[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((item) => {
        const top = item.section.getBoundingClientRect().top;
        const distance = Math.abs(top - 176);
        if (top <= 260 && distance < bestDistance) {
          bestDistance = distance;
          current = item;
        }
      });

      activate(current.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          const matched = sections.find((item) => item.section === visible[0].target);
          if (matched) {
            activate(matched.id);
            return;
          }
        }

        syncFromScroll();
      },
      {
        rootMargin: "-14% 0px -54% 0px",
        threshold: [0.15, 0.35, 0.65],
      },
    );

    sections.forEach((item) => observer.observe(item.section));
    syncFromScroll();

    const handleScroll = () => syncFromScroll();
    const handleResize = () => syncFromScroll();
    const handleClick = (event: Event) => {
      if (event.currentTarget instanceof HTMLAnchorElement) {
        activate(event.currentTarget.dataset.target || "");
      }
    };

    sections.forEach((item) => item.link.addEventListener("click", handleClick));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    teardownFns.push(() => observer.disconnect());
    teardownFns.push(() => window.removeEventListener("scroll", handleScroll));
    teardownFns.push(() => window.removeEventListener("resize", handleResize));
    teardownFns.push(() => sections.forEach((item) => item.link.removeEventListener("click", handleClick)));
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
