/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import appContext from "@/store/appContext";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
const FirstSection: React.FC<{
  children: React.ReactNode;
  containerClassName: string;
}> = ({ children, containerClassName }) => {
  const ctx = useContext(appContext);

  const containerRef = useRef(null);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "-150px",
    };
  }, []);

  const callBackFn = useCallback((entries: any, _observer: any) => {
    const [entry] = entries;

    ctx.changeStickyHeader(!entry.isIntersecting);
  }, []);

  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(callBackFn, options);

    if (current) observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [callBackFn, containerRef, options]);

  return (
    <div
      className={`${containerClassName}  w-full`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default FirstSection;
