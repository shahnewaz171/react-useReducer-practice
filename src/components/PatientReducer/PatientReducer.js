import React, { useReducer } from 'react';
import { patientState, reducer } from '../reducer/patientReducer';


const PatientReducer = () => {
    const [state, dispatch] = useReducer(reducer, patientState);

    return (
        <div>
            <h1>This is a Patient Reducer</h1>
        </div>
    );
};

export default PatientReducer;