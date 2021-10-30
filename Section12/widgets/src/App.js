import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import DropDown from "./components/DropDown"
import Translate from "./components/Translate"

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework",
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
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Translate />
      {/* <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        label="color" /> */}
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  )
}

export default App
