import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";

import './App.css';

function App() {

  const ref = useRef(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleDocumentClick = event => {
      if (ref.current) {
        if (!ReactDOM.findDOMNode(ref.current).contains(event.target)) {
          if (opened) {
            setOpened(false);
          }
        }
      }
    };

    document.addEventListener("click", handleDocumentClick, false);

    return () => {
      document.removeEventListener("click", handleDocumentClick, false);
    };
  }, [ref, opened]);

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
