import { apiClient } from "./ApiClient"

export const retrieveAllEntriesApi = () => apiClient.get(`/entries-list`)

export const retrieveEntriesOnPageApi = (page, limit, sortType, token) => apiClient.get(`/entries-list/${page}:${limit}:${sortType}`,
    {
        headers: { Authorization: token}
    }
)

export const deleteEntryApi = (id) => apiClient.delete(`/entries-list/${id}`)

export const createEntryApi = (entry) => apiClient.post(`/entries-list`, entry)

export const retrieveEntryApi = (id) => apiClient.get(`entry/${id}`)

export const updateEntryApi = (entry, id) => apiClient.put(`entry/${id}`, entry)

export const getPagesListApi = (limit) => apiClient.get(`/pages:${limit}`)

export const checkForDuplicatesApi = (date) => apiClient.get(`/duplicate/${date}`)