import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// Custom styles using makeStyles
const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

// Custom styled Slider using withStyles
const CustomSlider = withStyles({
    root: {
        height: 3,
        padding: "13px 0",
    },
    track: {
        height: 4,
        borderRadius: 2,
    },
    thumb: {
        backgroundColor: "#fff",
    },
})(Slider);

// Function to display value as text
function valuetext(value) {
    return `${value}`;
}

// RangeSlider functional component
const RangeSlider = (props) => {
    // Retrieve styles using makeStyles
    const classes = useStyles();
    // State to manage slider values
    const [value, setValue] = React.useState([20, 37]);

    // Handle change event when the slider values are changed
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Handle commit event when the slider values are committed
    const handleCommit = (event, newValue) => {
        console.log(newValue);
    };

    return (
        <div className={classes.root}>
            {/* Custom styled Slider component */}
            <CustomSlider
                disabled={props.disable}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleCommit}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="off"
            />
            {/* Typography to display label for the range slider */}
            <Typography id="range-slider" gutterBottom>
                Value range
            </Typography>
        </div>
    );
};

export default RangeSlider;
