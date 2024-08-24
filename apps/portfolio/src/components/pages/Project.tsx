"use client";
import React, { MouseEvent } from "react";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import { Text } from "rsuite";

export const Project = () => {
  return (
    <div className="p-0 lg:px-4 py-12">
      <Text align="center" size={32} weight="semibold" className="pb-3">
        Projects
      </Text>
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-200 border border-neutral-200">
      <div className="grid grid-cols-2 divide-x divide-neutral-200">
        <LinkBox src="/interview.png" alt="hello" href="#" />
        <LinkBox src="/kalasa.png" alt="hello" href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-200">
        <LinkBox src="/messenger.png" alt="hello" href="#" />
        <LinkBox src="/ohio.png" alt="hello" href="#" />
        <LinkBox src="/mex.webp" alt="hello" href="#" />
      </div>
      {/* <div className="grid grid-cols-3 divide-x divide-neutral-300">
        <LinkBox src="/ywa.jpg" alt="hello" href="#" />
        <LinkBox src="/ywa.jpg" alt="hello" href="#" />
        <LinkBox src="/ywa.jpg" alt="hello" href="#" />
      </div> */}
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full overflow-hidden place-content-center sm:h-28 md:h-36"
    >
      {/* <Icon className="text-xl sm:text-3xl lg:text-4xl" /> */}
      <ImageCom src={src} alt={alt} />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center overflow-hidden bg-neutral-900 text-white"
      >
        {/* <Icon className="text-xl sm:text-3xl md:text-4xl" /> */}
        <ImageCom src={src} alt={alt} />
      </div>
    </a>
  );
};

export const ImageCom = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={160} height={160} />;
};
