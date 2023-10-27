import { apiBase } from "./ApiClient"


export const retrieveHellowWorldBean = () => apiBase.get('/hello-world')
export const retrieveHellowWorldPathVariable = (username, token) => apiBase.get(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: token
    }
})

export const executeBasicAuthenticationService = (token) => apiBase.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})
