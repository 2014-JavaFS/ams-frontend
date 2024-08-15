import axios from 'axios'

export const amsServer = axios.create({
    baseURL: "http://ec2-13-59-42-43.us-east-2.compute.amazonaws.com:8888",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})