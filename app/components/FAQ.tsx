"use client";

import React, { useState } from "react";
import FAQAccordion from "./FAQ-Accordion";
import AccordionBoard from "./AccordionBoard";

const FAQ = () => {
  const [isActive, setActive] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center px-12 xl:px-0 max-w-[1240px] gap-5 w-full mt-36">
      <h2 className="w-full text-3xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="flex w-full justify-end items-center relative my-12">
        <FAQAccordion isActive={isActive} setActive={setActive} />
        <AccordionBoard isActive={isActive} />
      </div>
    </div>
  );
};

export default FAQ;
