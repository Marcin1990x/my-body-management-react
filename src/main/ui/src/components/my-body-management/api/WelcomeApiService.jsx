import { apiClient } from "./ApiClient"

export const retrieveMonthlySummaryApi = (token)  => apiClient.get(`/welcome`, 
    {
    headers: { 'Authorization': token }
    }
)
