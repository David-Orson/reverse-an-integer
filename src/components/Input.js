import React from 'react';

import "../css/Input.css"

const Input = (props) => {
  const {int, setInt, reverser} = props
  
  const handleSubmit = (e) => {
    e.preventDefault();
    reverser(int)
  } 

  return (
    <div className="input">
      <form className="input-form" onSubmit={handleSubmit} >
        <label className="input-label">Enter your integer!</label>
        <input className="input-input" type="text" value={int} onChange={(e) => setInt(e.target.value)}  />
        <button className="input-button">Reverse</button>
      </form>
    </div>
  )
}

export default Input;