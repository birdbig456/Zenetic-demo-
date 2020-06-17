import {ADD_PROJECT} from "../constants"

export const setStateToProject = (payload) => ({
    type: ADD_PROJECT,  
    payload
})

export const addProject = (payload)=>{
    return dispatch=>{
        console.log(payload)
        dispatch(setStateToProject(payload))
    }
}


