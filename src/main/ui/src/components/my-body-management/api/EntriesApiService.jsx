import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8090'
})

export const retrieveAllEntriesApi = apiClient.get('/entries')

export const deleteEntryApi = (id) => apiClient.delete(`/entries/${id}`)