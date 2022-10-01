import { OPEN } from "./actionType"

const init = {
    open: false
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case OPEN: {
            return {
                ...state,
                open: payload
            }
        }
        default: return state
    }
}