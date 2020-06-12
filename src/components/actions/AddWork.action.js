import { ADDRESS_WORK} from "../constants"

export const setAddressStateToLocation = (payload) => ({
    type: ADDRESS_WORK,  
    payload
})

export const addWork = (payload)=>{
    return dispatch=>{
        console.log(payload)
        dispatch(setAddressStateToLocation(payload))
    }
}
