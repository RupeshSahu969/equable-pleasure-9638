import * as types from "./actionType"

export const openFun = (token) => {
    // console.log('token:', token)
    return { type: types.OPEN, payload: token }
}

export const activeTracker = (token) => {
    return { type: types.TRACKER, payload: token }
}
export const activeCalendar = (token) => {
    return { type: types.CALENDAR, payload: token }
}
export const activeDashboard = (token) => {
    return { type: types.DASHBOARD, payload: token }
}
export const activeReports = (token) => {
    return { type: types.REPORTS, payload: token }
}
export const activeProjects = (token) => {
    return { type: types.PROJECTS, payload: token }
}
export const activeTeam = (token) => {
    return { type: types.TEAM, payload: token }
}
export const activeClients = (token) => {
    return { type: types.CLIENTS, payload: token }
}
export const activeTags = (token) => {
    return { type: types.TAGS, payload: token }
}
export const activeSettings = (token) => {
    return { type: types.SETTINGS, payload: token }
}
export const activeArrow = (token) => {
    return { type: types.ARROW, payload: token }
}
export const authFun = (token,name,email) => {
    return { type: types.AUTH, payload: {token,name,email} }
}

export const addActiveProject = (projexts) => {
    console.log("in action",projexts)
    return{
        type:types.ADDPROJECTS,payload:projexts
    }
}