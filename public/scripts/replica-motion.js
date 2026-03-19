(() => {
  let teardownFns = [];

  const clearTeardowns = () => {
    teardownFns.forEach((fn) => {
      try {
        fn();
      } catch {
        // noop
      }
    });
    teardownFns = [];
  };

  const revealStatic = (elements) => {
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add("is-visible");
      }
    });
  };

  const setupAutoplayVideos = () => {
    const videos = document.querySelectorAll("video[autoplay]");
    videos.forEach((video) => {
      if (!(video instanceof HTMLVideoElement)) {
        return;
      }

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

      video.addEventListener("loadedmetadata", ensurePlaying);
      video.addEventListener("canplay", ensurePlaying);
      if (video.paused) {
        ensurePlaying();
      }

      teardownFns.push(() => video.removeEventListener("loadedmetadata", ensurePlaying));
      teardownFns.push(() => video.removeEventListener("canplay", ensurePlaying));
    });
  };

  const setupLiftIns = (reducedMotion) => {
    const elements = document.querySelectorAll("[data-lift], [data-home-stagger]");
    if (!elements.length) {
      return;
    }

    if (reducedMotion) {
      revealStatic(elements);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!(entry.target instanceof HTMLElement)) {
            return;
          }

          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        element.style.setProperty("--lift-delay", `${index * 45}ms`);
        observer.observe(element);
      }
    });

    teardownFns.push(() => observer.disconnect());
  };

  const setupHomeMotion = (reducedMotion) => {
    const page = document.querySelector(".home-replica");
    if (!(page instanceof HTMLElement)) {
      return;
    }

    const discoveryBand = page.querySelector("[data-home-discovery]");
    const contactBand = page.querySelector("[data-home-contact]");
    const contactTrigger = page.querySelector("[data-contact-trigger]");

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

    [discoveryBand, contactBand].forEach((band) => {
      if (!(band instanceof HTMLElement)) {
        return;
      }

      if (reducedMotion) {
        band.classList.add("is-visible");
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target instanceof HTMLElement) {
              entry.target.classList.toggle(
                "is-visible",
                entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.72,
              );
            }
          });
        },
        {
          rootMargin: "0px 0px -18% 0px",
          threshold: 0.12,
        },
      );

      observer.observe(band);
      teardownFns.push(() => observer.disconnect());
    });
  };

  const setupSectionRails = () => {
    const roots = document.querySelectorAll("[data-section-rail-root]");
    roots.forEach((root) => {
      if (!(root instanceof HTMLElement)) {
        return;
      }

      const links = Array.from(root.querySelectorAll("[data-rail-link]")).filter(
        (link) => link instanceof HTMLAnchorElement,
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

      const activate = (id) => {
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
      const handleClick = (event) => {
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

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setupAutoplayVideos();
    setupLiftIns(reducedMotion);
    setupHomeMotion(reducedMotion);
    setupSectionRails();
  };

  if (!window.__replicaMotionRegistered) {
    document.addEventListener("DOMContentLoaded", bootReplicaMotion);
    document.addEventListener("astro:page-load", bootReplicaMotion);
    window.addEventListener("pageshow", bootReplicaMotion);
    window.__replicaMotionRegistered = true;
  }

  bootReplicaMotion();
})();
