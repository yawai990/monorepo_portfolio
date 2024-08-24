"use client";
import { EXPERIENCES } from "@/data/exp";
import React from "react";
import { Text, Timeline } from "rsuite";
import Image from "next/image";

const Experiences = () => {
  return (
    <div>
      <Text align="center" size={32} weight="semibold" className="pb-3">
        Experiences
      </Text>
      <Timeline>
        <div className="grid lg:grid-cols-2 gap-x-5">
          {EXPERIENCES.map((exp, id) => (
            <Timeline.Item
              key={id}
              dot={
                exp.logo.trim() ? (
                  <Image
                    width={30}
                    height={30}
                    alt="company_logo"
                    src={exp.logo}
                    className="object-cover rounded-full"
                  />
                ) : null
              }
            >
              <div className="pl-2">
                <Text weight="bold" size="xl" color="orange">
                  {exp.company}
                </Text>
                <Text size="md" weight="semibold" muted>
                  {exp.position}
                </Text>
                <Text size="md" className="my-2" muted>
                  {exp.timeline}
                </Text>
                <div className="mt-2">
                  {exp.responsibilities
                    .split("-")
                    .slice(1)
                    .map((responsibility, idx) => (
                      <Text size="lg" muted className="!leading-6" key={idx}>
                        {" "}
                        <span className="size-1.5 mr-2 rounded-full bg-gray-300 inline-block" />
                        {responsibility}
                      </Text>
                    ))}
                </div>
              </div>
            </Timeline.Item>
          ))}
        </div>
      </Timeline>
    </div>
  );
};

export default Experiences;
