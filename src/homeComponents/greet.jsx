import React from 'react';
import './style.css';

const Greet = () => {
  return (
    <div className="greet">
      <h1 className="display-3">Algorithm Visualizer</h1>
      <hr className="dropdown-divider" />
      <h1 className="greet-description">Algorithm Visualizer is an interactive online platform that visualizes algorithms from code. Currently these include Sorting, Pathfinding and N Queen Algorithms. More Algorithms will be coming soon!!</h1>
    </div>
  );
};

export default Greet;
