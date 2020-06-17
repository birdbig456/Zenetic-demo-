import { ADD_PROJECT } from "../constants"

export default (state = [], { type, payload }) => {
    switch (type) {
      
      case ADD_PROJECT:
        return [
          ...state,
           payload
        ];
      default:
        return state;
    }
  };

