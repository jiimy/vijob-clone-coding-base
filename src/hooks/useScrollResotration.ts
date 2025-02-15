import { useEffect, useRef } from "react";

function saveScrollPos() {
  sessionStorage.setItem("scrollPos", window.scrollY.toString());
}

function restoreScrollPos() {
  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos, 10));
    sessionStorage.removeItem("scrollPos");
  }
}

import { NextRouter } from "next/router";

export default function useScrollResotration(router: NextRouter) {
  const shouldScrollRestore = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      shouldScrollRestore.current = false;
      window.history.scrollRestoration = "manual";

      const onRouteChangeStart = () => {
        if (!shouldScrollRestore.current) {
          saveScrollPos();
        }
      };

      const onRouteChangeComplete = () => {
        if (shouldScrollRestore.current) {
          shouldScrollRestore.current = false;
          restoreScrollPos();
        }
      };

      router.events.on("routeChangeStart", onRouteChangeStart);
      router.events.on("routeChangeComplete", onRouteChangeComplete);
      router.beforePopState(() => {
        shouldScrollRestore.current = true;
        return true;
      });

      return () => {
        router.events.off("routeChangeStart", onRouteChangeStart);
        router.events.off("routeChangeComplete", onRouteChangeComplete);
        router.beforePopState(() => true);
      };
    }
  }, [router]);
}