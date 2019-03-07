import React from 'react'
import './Char.css'

const Char = (props) => {
    return <p onClick={props.click} className="char">{props.char}</p>
}

export default Char