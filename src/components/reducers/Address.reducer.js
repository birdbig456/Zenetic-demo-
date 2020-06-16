import { ADDRESS_WORK } from "../constants"

export default (state = [], { type, payload }) => {
    switch (type) {
      
      case ADDRESS_WORK:
        return [
          ...state,
           payload
        ];
      default:
        return state;
    }
  };

