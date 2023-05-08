import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8090'
})

export const retrieveAllEntriesApi = apiClient.get('/entries-list')

export const deleteEntryApi = (id) => apiClient.delete(`/entries-list/${id}`)

export const createEntryApi = (entry) => apiClient.post('/entries-list', entry)