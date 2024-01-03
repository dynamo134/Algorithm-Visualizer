import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// Styling for the component
const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

// Function to format the value for display
function valuetext(value) {
    return `${value}`;
}

// Functional component for a discrete slider
const DiscreteSlider = (props) => {
    const classes = useStyles();

    // Event handler for when the slider value changes
    const handleChange = (event) => {
        // Check if the slider value is not empty
        if (event.target.innerText === "") {
            return;
        }

        // Parse the value to an integer and invoke the onCountChange callback
        const num = parseInt(event.target.innerText, 10);
        props.onCountChange(num);
    }

    return (
        <div className={classes.root + " ml-2 mr-2"}>

            {/* Material-UI Slider component */}
            <Slider
                defaultValue={props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChangeCommitted={handleChange}
                step={props.step}
                min={props.min}
                max={props.max}
                valueLabelDisplay="on"
                disabled={props.disable}
            />

            {/* Typography component for displaying the title */}
            <Typography id="discrete-slider" gutterBottom>
                {props.title}
            </Typography>
        </div>
    );
}

export default DiscreteSlider;
