import React from 'react';

import "../css/Output.css"

const Output = (props) => {

  console.log(props)
  return (
    <div className="output">
      <p className="output-tagline">Your integer reversed is: </p>
      <p className="output-string">{props.reversedInteger}</p>
    </div>
  )
}

export default Output;