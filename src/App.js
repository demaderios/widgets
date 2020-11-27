import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is your first name?",
    content: "Greg",
  },
  {
    title: "Where is your favorite place to live?",
    content: "Oregon",
  },
  {
    title: "Where did you grow up?",
    content: "Northern California",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
