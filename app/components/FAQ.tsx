import React from "react";
import FAQAccordion from "./FAQ-Accordion";
import AccordionBoard from "./AccordionBoard";

const FAQ = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-24 lg:px-78 mt-36">
      <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      <div className="flex justify-between">
        <FAQAccordion />
        <AccordionBoard />
      </div>
    </div>
  );
};

export default FAQ;
