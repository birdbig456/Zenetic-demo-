import { ADDRESS_WORK} from "../constants"

export const setAddressStateToLocation = () => ({
    type: ADDRESS_WORK,  
})

export const addWork = (payload)=>{
    return dispatch=>{
        console.log(payload)
        dispatch(setAddressStateToLocation(payload))
    }
}
