import {ADDRESS_POSITION} from "../constants"

export const setAddressStateToPosition = (payload) => ({
    type: ADDRESS_POSITION,  
    payload
})

export const addPosition = (payload)=>{
    return dispatch=>{
        console.log(payload)
        dispatch(setAddressStateToPosition(payload))
    }
}


