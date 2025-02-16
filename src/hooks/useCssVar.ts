import { useState, useEffect } from "react";

function useCssVar(size: string, property: any) {
  useEffect(() => {
    document.documentElement.style.setProperty(`${property}`, `${size}`);
  }, [size, property]);

  return [];
}

export default useCssVar;
