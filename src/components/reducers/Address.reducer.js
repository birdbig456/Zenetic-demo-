import { ADDRESS_WORK } from "../constants"


const workAddress = {
  name:"",
  code:"",
  country:"",
  street:"",
  apt:"",
  city:"",
  state:"",
  zip:"",
  phone:""
};

export default (state = workAddress, { type, payload }) => {
    switch (type) {
      
      case ADDRESS_WORK:
        return {
          ...state,
           name:payload.name,
           code:payload.code,
           country:payload.country,
           street:payload.street,
           apt:payload.apt,
           city:payload.city,
           state:payload.state,
           zip:payload.zip,
           phone:payload.phone,
        };
      default:
        return state;
    }
  };

