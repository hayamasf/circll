"use client";

import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
};

export default function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div className="pt-8">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className="w-full flex justify-between border-b py-2"
        onClick={toggleAccordion}
      >
        <span className="text-sm font-light text-gray-800">{title}</span>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      {isOpen && <div className="bg-blue-100 p-6">{content}</div>}
    </div>
  );
}
