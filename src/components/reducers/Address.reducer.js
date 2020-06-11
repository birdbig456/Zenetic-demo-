import { ADDRESS_WORK } from "../constants"

const initialState = {
    name:" ",
    code:" "
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDRESS_WORK:
        return { ...state, name:(payload) ,code:"" }
        
    default:
        return state
    }
}
