import React from 'react';
import Typewriter from "typewriter-effect";
import './style.css';

const TypeWriterC = () => {
  return (
    <div className="type display-3">
      <span className="badge">
        <Typewriter
          options={{
            strings: ['Graph Algorithms', 'Sorting Algorithms', '8 Queen'],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};

export default TypeWriterC;
