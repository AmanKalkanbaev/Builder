const initialState = {
    satellites:{
        Astronomical: 5,
        Comunication: 5,
        Medical: 5,
        Meteorological: 5,
        Military: 5,
        Navigational: 5,
        Television: 5
    }
}

const builderReducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case  "ADD_SATELLITE":
            newState.satellites[action.satellite]++;
            break
        case  "REMOVE_SATELLITE":
            newState.satellites[action.satellite]--;
            break

    }

    return newState;
}
 
export default builderReducer;