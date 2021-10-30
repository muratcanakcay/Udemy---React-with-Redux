import React, { useState } from 'react'
import DropDown from './DropDown'

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
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])

    return (
        <div>
            <DropDown options={options} selected={language} onSelectedChange={setLanguage} label="language" />
        </div>
    )

}

export default Translate