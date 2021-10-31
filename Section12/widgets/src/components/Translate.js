import React, { useState } from 'react'
import DropDown from './DropDown'
import Convert from './Convert'

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Turkish",
        value: "tr"
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <DropDown options={options} selected={language} onSelectedChange={setLanguage} label="Select a language:" />
            <hr></hr>
            <h3 className="ui header">Output:</h3>
            <Convert language={language} text={text} />

        </div>
    )

}

export default Translate