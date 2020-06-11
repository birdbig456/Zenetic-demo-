import {ADDRESS_DEPARTMENT} from "../constants"

export const setAddressStateToDepartment = () => ({
    type: ADDRESS_DEPARTMENT,  
})

export const addDepartment = ()=>{
    return dispatch=>{
        dispatch(setAddressStateToDepartment())
    }
}