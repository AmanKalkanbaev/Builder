import { ADD_SATELLITE, REMOVE_SATELLITE, SET_SATELLITE} from "../actions/types";

const initialState = {
    satellites:{
        Astronomical: 1,
        Comunication: 1,
        Medical: 1,
        Meteorological: 1,
        Military: 1,
        Navigational: 1,
        Television: 1
    },
    price:351,
}

const prices = {
    Astronomical: 64,
    Comunication: 25,
    Medical: 77,
    Meteorological: 96,
    Military: 51,
    Navigational: 23,
    Television: 15
};

const builder = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case  ADD_SATELLITE:
            newState.satellites[action.satellite]++;
            newState.price += prices[action.satellite];
            break
        case  REMOVE_SATELLITE:
            newState.satellites[action.satellite]--;
            newState.price -= prices[action.satellite];
            break

        case SET_SATELLITE:
        return { ...action.data };

        default:
        break;
    }

    return newState;
}
 
export default builder;