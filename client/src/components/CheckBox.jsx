import React from 'react'

export default function Checkbox({ checkboxValue, onChangeFunction }) {

    return (
        <div>
            <label>
                {checkboxValue}
            </label>
            <input
                type="checkbox"
                id={checkboxValue}
                onChange={e => onChangeFunction(e)}
                name={checkboxValue}
                value={checkboxValue}
            />
        </div>
    )
}
