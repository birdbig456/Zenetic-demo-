import {ADDRESS_POSITION} from "../constants"

export const setAddressStateToPosition = () => ({
    type: ADDRESS_POSITION,  
})

export const addPosition = ()=>{
    return dispatch=>{
        dispatch(setAddressStateToPosition())
    }
}