import axios from "axios"

export const apiClient = axios.create()

export const retrieveAllEntries = apiClient.get('/entries')
