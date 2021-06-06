import React from 'react'
import "../InputOptions/InputOptions.css"

function InputOptions({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }}/>
            <h2>{title}</h2>
        </div>
    )
}

export default InputOptions
