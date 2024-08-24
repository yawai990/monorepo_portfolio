import React from "react";
import Image from "next/image";
import { Text } from "rsuite";

const Certificate = () => {
  return (
    <div>
      <Text align="center" size={32} weight="semibold" className="pb-3">
        Certification
      </Text>
      <a
        target="_blank"
        href="https://www.credly.com/badges/cf6cbeab-4687-49d4-9803-32f7ca4b83ee/public_url"
      >
        <Image
          src="/certificate/aws_quest.png"
          alt="aws_quest"
          width={120}
          height={120}
        />
      </a>
    </div>
  );
};

export default Certificate;
