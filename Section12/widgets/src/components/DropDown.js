import React, { useState, useEffect, useRef } from 'react'

const DropDown = ({ selected, onSelectedChange, options }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) {
                return
            }
            setOpen(false)
        }

        document.body.addEventListener(
            "click",
            onBodyClick,
            { capture: true }
        )

        return () => {
            document.body.removeEventListener("click", onBodyClick)
        }
    }, [])

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div >
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? "visible active" : ""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown