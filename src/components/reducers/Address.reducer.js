import { ADDRESS_LOCATION } from "../constants"

const initialState = {
    name:" ",
    code:" ",
    address:{country:" ",street:" ",number:" ",city:" ",zipCode:" "},
    phoneNumber:" "
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDRESS_LOCATION:
        return { ...state, name: payload }
        
    default:
        return state
    }
}
