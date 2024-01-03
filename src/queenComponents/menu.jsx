import React from 'react';
import DiscreteSlider from "./slider";

// Functional component for the menu bar
const Menu = (props) => {
    // Function to determine if the button should be clickable based on the disable prop
    const isClickable = () => {
        if (props.disable) {
            return { cursor: "not-allowed" };
        } else {
            return {};
        }
    };

    return (
        // Navigation bar with a dark alert background
        <nav className="nav alert-dark">
            {/* Clear Board button */}
            <button
                className='btn btn-secondary m-2'
                onClick={props.onClear}
                disabled={props.disable}
                style={isClickable()}
            >
                Clear Board
            </button>

            {/* Grid size slider */}
            <DiscreteSlider
                default={4}
                min={1}
                max={8}
                step={1}
                title="Grid size"
                onCountChange={props.onCountChange}
                disable={props.disable}
            />

            {/* Speed slider */}
            <DiscreteSlider
                default={50}
                min={1}
                max={100}
                step={1}
                title="Speed"
                onCountChange={props.onSpeedChange}
            />

            {/* Visualize button */}
            <button
                className='btn btn-warning btn-lg '
                onClick={props.onViusalize}
                disabled={props.disable}
                style={isClickable()}
            >
                Visualize
            </button>
        </nav>
    );
};

export default Menu;
