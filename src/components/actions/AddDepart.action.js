import {ADDRESS_DEPARTMENT} from "../constants"

export const setAddressStateToDepartment = (payload) => ({
    type: ADDRESS_DEPARTMENT,  
    payload
})

export const addDepartment = (payload)=>{
    return dispatch=>{
        console.log(payload)
        dispatch(setAddressStateToDepartment(payload))
    }
}


