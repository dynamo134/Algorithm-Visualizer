import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Functional component for handling switch labels
const SwitchLabels = (props) => {
    // State to manage the switch state
    const [state, setState] = React.useState({
        checkedA: false,
    });

    // Handle change event when the switch state changes
    const handleChange = (event) => {
        // Update state based on the changed switch
        setState({ ...state, [event.target.name]: event.target.checked });
        // Call the provided callback function with the updated switch state
        props.onDoubleChange(event.target.checked);
    };

    return (
        <FormGroup row>
            {/* Switch component with label */}
            <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Duo"
                disabled={props.disable}
            />
        </FormGroup>
    );
};

export default SwitchLabels;
