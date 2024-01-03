import React from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";

// Functional component Menu
const Menu = (props) => {
    // Helper function to determine the appropriate style for clickable elements
    const isClickable = () => {
        if (props.isDisabled) {
            return { cursor: "not-allowed" };
        } else {
            return {};
        }
    };

    // Render the menu with buttons and input components
    return (
        <nav className="nav alert-dark">
            {/* Refresh button */}
            <button
                className="btn btn-primary btn-lg m-2"
                onClick={props.onRefresh}
                disabled={props.isDisabled}
                style={isClickable()}
            >
                Refresh
            </button>

            {/* Algorithm selection dropdown */}
            <SimpleSelect pos={0} onAlgoChanged={props.setAlgo} />

            {/* Speed slider */}
            <DiscreteSlider
                onChange={props.onChangeSpeed}
                title="speed"
                marks={false}
                default={10}
                step={1}
                min={10}
                max={50}
                isDisabled={false}
            />

            {/* Total Number slider */}
            <DiscreteSlider
                onChange={props.onChangeValues}
                title="Total Number"
                marks={false}
                default={100}
                step={1}
                min={10}
                max={500}
                isDisabled={props.isDisabled}
            />

            {/* Visualize button */}
            <button
                className="btn btn-warning btn-lg m-2"
                onClick={props.onVisualize}
                disabled={props.isDisabled}
                style={isClickable()}
            >
                Visualize
            </button>
        </nav>
    );
};

export default Menu;
