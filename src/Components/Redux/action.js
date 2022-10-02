import { OPEN } from "./actionType"

export const openFun = (token) => {
    console.log('token:', token)
    return { type: OPEN, payload: token }
}