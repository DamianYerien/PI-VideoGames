import React from 'react'
import s from '../Styles/CreateStyle.module.css'


export default function Checkbox({ checkboxValue, onChangeFunction }) {

    return (
        <div className={s.labe}>
            <label >
                {checkboxValue}
            </label>
            <input
            className={s.box}
                type="checkbox"
                id={checkboxValue}
                onChange={e => onChangeFunction(e)}
                name={checkboxValue}
                value={checkboxValue}
            />
        </div>
    )
}
