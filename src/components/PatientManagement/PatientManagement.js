import React, { useReducer, useRef } from 'react';
import { patientState, reducer } from '../reducer/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(reducer, patientState);
    // console.log(state);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, 
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }
    // console.log(state.patients);

    return (
        <div>
            <h1>This is patient management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(pt => (
                    <li key={pt.id} onClick={() => dispatch({type: "REMOVE_PATIENT", id: pt.id})}>
                        {pt.name}
                    </li>
                ))
            }
        </div>
    );
};

export default PatientManagement;