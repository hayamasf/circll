"use client";

import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => setWidth(window.innerWidth);
      setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return width;
}
