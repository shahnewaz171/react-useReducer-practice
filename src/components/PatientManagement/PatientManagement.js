import React, { useReducer } from 'react';
import { patientState, reducer } from '../reducer/patientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(reducer, patientState);

    return (
        <div>
            <h1>This is patient management: {state.patients.length}</h1>
            <form action="">
                <input type="value" />
            </form>
            <button onClick={() => dispatch({type: 'ADD_PATIENT'})}>Add Patient</button>
        </div>
    );
};

export default PatientManagement;