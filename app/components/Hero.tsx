import { Button, Input } from "@heroui/react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center flex-1">
      <div className="py-1 px-3 inset-2 w-fit border text-sm rounded-full bg-background">
        🏆 10,000 Smart Schedules Generated
      </div>
      <p className="text-center text-4xl font-bold mt-24 flex flex-col gap-3">
        <span className="block">Let AI Handle</span>
        <span className="block w-fit text-nowrap">
          <span className="text-primary me-2">Scheduling</span>
          While You Rest
        </span>
      </p>
      <p className="mt-12 text-center max-w-[650px] px-12">
        No more manual planning. Just verified, stress-free timetables powered
        by AI, secured by Cardano, and built for real academic peace of mind.
      </p>

      <p className="text-center mt-30">
        Join the waitlist and get notified when we launch!
      </p>
      <div className="flex items-center mt-4">
        <Input
          style={{
            width: "300px",
            border: "1px solid #EDEDED",
            outline: "none",
            padding: "0.2rem 1rem",
            borderRadius: "9999px",
          }}
          placeholder="Enter your email"
          type="email"
        />
        <Button className="rounded-full text-nowrap border py-1 px-2 text-sm cursor-pointer">
          Join Beta
        </Button>
      </div>
    </div>
  );
};

export default Hero;
