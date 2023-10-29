import { apiBase } from "./ApiClient"


export const executeBasicAuthenticationService = (token) => apiBase.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})


export const executeJwtAuthenticationService
    = (username, password) =>
        apiBase.post(`/authenticate`, {
            username, password
        })