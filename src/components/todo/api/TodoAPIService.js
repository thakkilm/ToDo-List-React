import { apiBase } from "./ApiClient"

export const retrieveAllTodosForUsername = (username) => apiBase.get(`/users/${username}/todos`)
// export const retrieveHellowWorldPathVariable = (username) => apiBase.get(`/hello-world/path-variable/${username}`)
export const deleteTodoAPI = (username, id) => apiBase.delete(`/users/${username}/todos/${id}`)

export const retrieveTodoAPI = (username, id) => apiBase.get(`/users/${username}/todos/${id}`)
export const updateTodoAPI = (username, id, todo) => apiBase.put(`/users/${username}/todos/${id}`, todo)
export const createTodoAPI = (username, todo) => apiBase.post(`/users/${username}/todos`, todo)



