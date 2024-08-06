import axios from 'axios'

export const amsServer = axios.create({
    baseURL: "http://localhost:9999",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})