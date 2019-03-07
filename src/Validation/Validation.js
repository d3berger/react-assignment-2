import React from 'react'

const Validation = (props) => {
    return <p> {props.len < 5 ? 'Text too short' : 'Text long enough'}</p>
}

export default Validation