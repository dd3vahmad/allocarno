"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { faqs } from "../lib/constants";

const FAQAccordion = () => {
  const [isActive, setActive] = useState(1);

  return (
    <div className="flex flex-col bg-white shadow-2xl rounded w-full max-w-[540px] z-10">
      {faqs.map((faq, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`w-full h-fit px-2 py-3 flex items-center cursor-pointer not-last:border-b hover:opacity-80 border-gray-200 justify-between ${
            isActive === i && "bg-purple-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`bg-primary w-[16px] h-[16px] rounded-full ${
                isActive !== i && "opacity-60"
              }`}
            ></div>
            <h4 className="text-sm font-semibold">{faq.question}</h4>
          </div>
          <ChevronRight
            size={"16px"}
            className={`${isActive !== i && "opacity-60"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
