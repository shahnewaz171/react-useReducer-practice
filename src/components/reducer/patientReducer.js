export const patientState = {
    patients: []
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            return state;
        case 'REMOVE_PATIENT':
            return state;    
        default: 
            return state;    
    }
}