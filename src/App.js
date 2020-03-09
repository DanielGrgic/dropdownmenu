import React, { useState, useRef } from 'react';
import './App.css';

function App() {

  const ref = useRef(null);
  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      <div className="dropdown-container" ref={ref}>
        <button className="btn-dropdown" onClick={() => setOpened(!opened)}>DropDown</button>
        {
          opened && (
            <ul className="dropdown-menu">
              <li onClick={() => setOpened(false)}>Menu Item1</li>
              <li onClick={() => setOpened(false)}>Menu Item2</li>
              <li onClick={() => setOpened(false)}>Menu Item3</li>
              <li onClick={() => setOpened(false)}>Menu Item4</li>
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
