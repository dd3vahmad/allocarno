import React from "react";
import { faqs } from "../lib/constants";

const AccordionBoard = ({ isActive }: { isActive: number }) => {
  const { question, answer } = faqs[isActive];
  return (
    <div className="bg-white rounded min-h-[300px] hidden md:flex w-[55%] flex-col justify-center items-end gap-5 ps-20 pe-12 py-6">
      <h3 className="font-semibold">{question}</h3>
      <p className="w-full text-end">{answer}</p>
    </div>
  );
};

export default AccordionBoard;
