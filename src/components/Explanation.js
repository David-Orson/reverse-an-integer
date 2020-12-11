import React, { useState } from 'react';

import "../css/Explanation.css"

import arrowDown from "../Assets/arrow-down.svg"

const Explanation = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <div className={`explanation ${(open ? ('explanation-opened') : (null))}`} >
      <div className="dropdown-title-container">
        <p className="explanation-title">More info, Solutions and Explanation</p>
        <img src={arrowDown} className={`arrow-down ${open ? 'arrow-open' : null}`} onClick={toggleOpen} />
      </div>
      <div className="explanation-dropdown">
        <p className="explanation-text">This coding challenge is to reverse any integer that the user inputs whilst maintaining whether it is a positive or negative number and if the number ends with zeros, they are removed upon reversal.<br/><br />
        As in the previous coding challenges, we have reversed strings, so we can use the same logic but only once we convert the number into a string. To do this we call the '.toString()' function, we then can use '.split('')', '.reverse()' and '.join()' functions to reverse the number. We can assign this new value as a variable as 'const reversed'.<br/><br />
        At this stage we have a variable called reversed which is a string that contains the characters of the original integer reversed. Another function we need to use now is the 'parseInt()' function to convert the string back to a number, so we pass the 'reversed' variable as an argument to this function.<br/><br/>
        Lastly, in order to maintain whether the number is a positive or negative value, we need to replace the negative sign if the integer was originally negative. To do this, we can use another JS function called 'Math.sign()' which returns a 1 when passed a positive number as an argument and a -1 when a negative number is passed as an argument. So we can pass the original integer into this and multiple the return value by our integer parsed from the reverse variable.<br/><br/>
        This concludes the code required, as we run 'parseInt()' on numbers which could end with multiple zeros, such as 500, the number is not returned as '005' but simply '5' which handles this case. Also if '005' was the value that was returned, multiplying this by the '1' or '-1' from 'Math.sign()' would return '5' or '-5' respectively.
        </p>
        {/* <div className="code-container">
          <p>
            <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
            <span className="yellow indent">let</span><span className="purple"> reversed</span>{' = '}<span className="orange">''</span>{';'}<br />
            <br />
            <span className="yellow indent">for</span><span className="cyan"> (</span><span className="yellow">let</span><span className="purple"> character</span><span className="yellow"> of</span><span className="purple"> string</span><span className="cyan">){' {'}</span><br />
            <span className="purple indent">reversed</span> = <span className="purple">character</span><span className="yellow"> + </span><span className="purple">reversed</span>;<br />
            <span className="cyan indent">{'}'}</span><br />
            <br />
            <span className="cyan indent">setReversedString(</span><span className="purple">reversed</span><span className="cyan">)</span><br />
            <span className="purple">{'}'}</span>
          </p>
        </div>
        <p className="explanation-text">
          Another Solution that could be used is to use the reduce function on the array with much the same logic as the previous solution.<br /><br />
          We first split the string into an array of the characters using the '.split()' method, then we use the reduce function to iterate over the array and reduce it into a single value, being a string. The reducer function takes two arguments as a higher order function, the first being a function with the arguments 'rev' and 'char', the second argument is the initialization value which we set as an empty string.<br /><br />
          We contain all of this logic inside the 'setReversedString()' React function for use inside other components of the app.<br /><br />
        </p>
        <div className="code-container-extra">
          <p>
          <span className=""></span>
          <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
          <span className="cyan indent">setReversedString(</span><span className="purple">string</span>.<span className="cyan">split</span><span className="yellow">(</span><span className="orange">''</span><span className="yellow">)</span>.<span className="cyan">reduce</span><span className="yellow">(</span><span className="purple">(rev</span>,<span className="purple">char)</span><span className="yellow"> ={'>'} </span><span className="purple">char</span><span className="yellow"> + </span><span className="purple">rev</span>,<span className="orange">''</span><span className="yellow">)</span><span className="cyan">)</span><br />
          <span className="purple">{'}'}</span>
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Explanation;