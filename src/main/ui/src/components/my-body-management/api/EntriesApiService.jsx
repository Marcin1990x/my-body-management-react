import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8090'
})

export const retrieveAllEntries = apiClient.get('/entries')
