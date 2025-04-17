import React from "react";
import {
  aiScheduler,
  blockchainRecords,
  web3University,
  security,
} from "@/app/assets";

const About = () => {
  const attributes = [
    {
      title: "AI-Powered Scheduling",
      banner: aiScheduler.src,
      description:
        "Let artificial intelligence generate conflict-free, optimized academic timetables in seconds.",
    },
    {
      title: "Blockchain-Verified Records",
      banner: blockchainRecords.src,
      description:
        "Every timetable is published to the Cardano blockchain for tamper-proof validation.",
    },
    {
      title: "Built for Universities",
      banner: web3University.src,
      description:
        "Allocarno is designed specifically for academic environments with roles for admins, lecturers, students, and even token holders.",
    },
    {
      title: "Transparent & Secure",
      banner: security.src,
      description:
        "Allocarno ensures transparency, security, and traceability in one seamless platform.",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-10 py-20">
      <h2 className="text-3xl font-semibold">
        About <span className="text-primary">Allocarno</span>
      </h2>
      <div className="w-fit flex flex-wrap gap-10 justify-center">
        {attributes.map((attribute, i) => (
          <div
            key={i}
            className="flex flex-col rounded overflow-hidden shadow-md shadow-purple-100 w-[280px] gap-3"
          >
            <img
              src={attribute.banner}
              alt={attribute.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="px-2 mb-5">
              <h3 className="w-full text-primary font-semibold">
                {attribute.title}
              </h3>
              <p className="max-w-xs text-sm mt-1">{attribute.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
