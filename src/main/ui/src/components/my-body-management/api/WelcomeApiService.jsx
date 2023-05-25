import { apiClient } from "./ApiClient"

export const retrieveMonthlySummaryApi = () => apiClient.get(`/welcome`)
