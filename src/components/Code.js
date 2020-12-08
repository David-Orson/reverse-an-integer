import React, { useState } from 'react';

import "../css/Code.css"

import arrowDown from "../Assets/arrow-down.svg"

const Code = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }


  return (
    <div className={`code ${(open ? ('code-opened') : (null))}`} >
      <div className="dropdown-title-container">
        <p className="code-title">Code used</p>
        <img src={arrowDown} className={`arrow-down ${open ? 'arrow-open' : null}`} onClick={toggleOpen} />
      </div>
      
      {/* {open ? ( */}<div className="code-dropdown">
        <p className="code-tagline">The code used for the functionality of this challenge is:</p>
        <div className="code-container">
          <p><span className=""></span>
            <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (int)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/> 
            <span className="yellow indent">const</span><span className="purple"> reversed</span> =<span className="purple"> int<br/></span><span className="indent2">.</span><span className="cyan">toString()<br/></span><span className="indent2">.</span><span className="cyan">split(</span><span className="orange">''</span><span className="cyan">)<br/></span><span className="indent2">.</span><span className="cyan">reverse()<br/></span><span className="indent2">.</span><span className="cyan">join(</span><span className="orange">''</span><span className="cyan">)</span>;<br/><br/>
            <span className="cyan indent">setReversedInt(<br/><span className="indent2">parseInt</span></span><span className="yellow">(</span><span className="purple">reversed</span><span className="yellow">)</span> *<span className="purple"> Math</span>.<span className="cyan">sign</span><span className="yellow">(</span><span className="purple">int</span><span className="yellow">)</span><span className="cyan"><br/><span className="indent">)</span></span>;<br/>
            <span className="purple">{'}'}</span>
          </p>
        </div>
      </div> {/* : (null)} */}
    </div>
  )
}

export default Code;