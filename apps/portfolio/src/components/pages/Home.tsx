"use client";
import React from "react";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import FancyText from "@carefully-coded/react-text-gradient";

const Hero = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="w-full flex items-center justify-center flex-col h-screen"
      ref={containerRef}
    >
      <div className="p-2 rounded-full bg-orange-400">
        <Image
          src="/ywa.jpg"
          alt="me"
          width={80}
          height={80}
          className="rounded-full size-20 object-cover object-top mx-auto block"
        />
      </div>
      <h5 className="font-bold text-2xl font-header">YA WAI AUNG</h5>
      <FancyText
        gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
        animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
        animateDuration={2000}
      >
        <span className="italic font-header text-[32px] font-semibold text-center text-inherit bg-transparent">
          FRONTEND DEVELOPER & DEVOPS
        </span>
      </FancyText>

      <div className="flex gap-4 py-3">
        <a
          href="https://www.linkedin.com/in/yawai-aung-2a455b255/"
          target="_blank"
          className="cursor-pointer border-2 p-2 border-orange-400 rounded-full"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:yawaiaung.developer@gmail.com"
          target="_blank"
          className="cursor-pointer border-2 p-2 border-orange-400 rounded-full"
        >
          <Mail />
        </a>
        {/* <a  href="phone:+66661294593" target="_blank" className="cursor-pointer border-2 p-2 border-orange-400 rounded-full">
          <Phone />
        </a> */}
      </div>
      {/* <div>
        <span
          className="absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase"
          ref={textRef}
        >
          FRONTEND DEVELOPER & <br /> DEVOPS
        </span>
      </div> */}
    </div>
  );
};

export default Hero;
