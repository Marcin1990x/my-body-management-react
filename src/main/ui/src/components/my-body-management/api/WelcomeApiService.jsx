import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8090'
})

export const retrieveMonthlySummaryApi = apiClient.get('/welcome')
