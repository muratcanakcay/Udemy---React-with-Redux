import React from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import DropDown from "./components/DropDown"

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
]

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "The Color Blue",
    value: "blue"
  }
]

const App = () => {
  return (
    <div>
      <DropDown items={items} />
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  )
}

export default App
