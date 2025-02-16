'use client';
import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";

export type LottieContainerProps = {
  path: any;
  classname?: string;
}

export const LottieContainer = ({ path, classname }: LottieContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData: path,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, []);

  return <div ref={containerRef} className={classname}></div>;
};


export default LottieContainer;