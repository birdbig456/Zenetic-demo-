import { ADDRESS_WORK } from "../constants"


{/*export default (state = [], { type, payload }) => {
    switch (type) {

    case ADDRESS_WORK:
        return { ...state, state:payload }
        
    default:
        return state
    }
}*/}

const workAddress = {
  
};

export default (state = workAddress, { type, payload }) => {
    switch (type) {
      
      case ADDRESS_WORK:
        return {
          ...state,
           state:payload,
        };
      default:
        return state;
    }
  };

{/*const addWorkLoad = (state = [], action) => {
    switch (action.type) {
      case 'ADDRESS_WORK':
        return { ...state, addWorkLoad: action.addWorkLoad };
      default:
        return state
    }
  }
  
export default addWorkLoad*/}