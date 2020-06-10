import { ADDRESS_POSITION,ADDRESS_DEPARTMENT,ADDRESS_LOCATION } from "../constants"

export const setAddressStateToLocation = () => ({
    type: ADDRESS_LOCATION,  
})
export const setAddressStateToDepartment = () => ({
    type: ADDRESS_DEPARTMENT,  
})
export const setAddressStateToPosition = () => ({
    type: ADDRESS_POSITION,  
})

export const addlocation = (payload)=>{
    return dispatch=>{
        dispatch(setAddressStateToLocation(payload))
    }
}
export const addDepartment = ()=>{
    return dispatch=>{
        dispatch(setAddressStateToDepartment())
    }
}
export const addPosition = ()=>{
    return dispatch=>{
        dispatch(setAddressStateToPosition())
    }
}