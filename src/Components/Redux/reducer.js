import * as types from "./actionType"

const init = {
    open: false,
    tracker: true,
    calendar: false,
    dashboard: false,
    reports: false,
    projects: false,
    team: false,
    clients: false,
    tags: false,
    settings: false,
    arrow: false,
    auth: false,
    name: "",
    email: "",
    activeProjects:[]
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case types.OPEN: {
            return {
                ...state,
                open: payload
            }
        }
        case types.AUTH: {
            const { name, email, token } = payload;
            return {
                ...state,
                auth: token,
                name: name,
                email: email
            }
        }

        case types.TRACKER: {
            return {
                ...state,
                tracker: true,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.CALENDAR: {
            return {
                ...state,
                tracker: false,
                calendar: true,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.DASHBOARD: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: true,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.REPORTS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: true,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.PROJECTS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: true,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.ADDPROJECTS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: true,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: false,
                activeProjects:[...payload]
            }
        }
        case types.TEAM: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: true,
                clients: false,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.CLIENTS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: true,
                tags: false,
                settings: false,
                arrow: false
            }
        }
        case types.TAGS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: true,
                settings: false,
                arrow: false
            }
        }
        case types.SETTINGS: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: true,
                arrow: false
            }
        }
        case types.ARROW: {
            return {
                ...state,
                tracker: false,
                calendar: false,
                dashboard: false,
                reports: false,
                projects: false,
                team: false,
                clients: false,
                tags: false,
                settings: false,
                arrow: true
            }
        }
        default: return state
    }
}