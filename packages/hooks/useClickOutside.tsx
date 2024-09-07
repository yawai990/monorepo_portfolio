import React from "react";
type Event = MouseEvent | TouchEvent;

export const useClickOutside = (ref: React.RefObject<HTMLElement>, cb: () => void) => {
  React.useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      cb();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, cb]);
};

export const useHideOnScroll = (cb: () => void) => {
  const handleScroll = () => {
    cb();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
