"use client";

import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic", offset: 64, disable: false });

    const refresh = requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => {
      cancelAnimationFrame(refresh);
    };
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-gsap]"));

      elements.forEach((element, index) => {
        const animation = element.dataset.gsap ?? "fade-up";
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const duration = isMobile ? 0.5 : 0.8;
        const baseOffset = isMobile ? 18 : 28;

        const fromState =
          animation === "fade-left"
            ? { opacity: 0, x: baseOffset }
            : animation === "fade-right"
              ? { opacity: 0, x: -baseOffset }
              : animation === "zoom-in"
                ? { opacity: 0, scale: 0.96 }
                : { opacity: 0, y: baseOffset };

        gsap.fromTo(element, fromState, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          ease: "power2.out",
          delay: index * 0.04,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true
          }
        });
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return children;
}
