import { ADDRESS_DEPARTMENT } from "../constants"

export default (state = [], { type, payload }) => {
    switch (type) {
      
      case ADDRESS_DEPARTMENT:
        return [
          ...state,
           payload
        ];
      default:
        return state;
    }
  };

