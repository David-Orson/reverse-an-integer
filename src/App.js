import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Code from './components/Code';
import Explanation from './components/Explanation';

const App = () => {
  const [int, setInt] = useState('')
  const [reversedInt, setReversedInt] = useState(null);

  const reverser = (int) => {
    const reversed = int.toString().split('').reverse().join('');

    setReversedInt(parseInt(reversed) * Math.sign(int));
  }

  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <div className="app-main">
          <Input int={int} setInt={setInt} reverser={reverser} />
          <Output reversedInt={reversedInt} />
          <p className="sign">App by David Orson</p>
        </div>
        <div className="app-secondary">
          <Code />
          <Explanation />
        </div>
      </div>
    </div>
  )
}

export default App;