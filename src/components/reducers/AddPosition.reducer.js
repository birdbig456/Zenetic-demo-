import { ADDRESS_POSITION } from "../constants"

export default (state = [], { type, payload }) => {
    switch (type) {
      
      case ADDRESS_POSITION:
        return [
          ...state,
           payload
        ];
      default:
        return state;
    }
  };

