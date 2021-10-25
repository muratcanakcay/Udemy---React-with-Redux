import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "Reach is a front end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a popular Javascript library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
