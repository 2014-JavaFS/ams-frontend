import axios from 'axios'

export const amsServer = axios.create({
    baseURL: "http://ec2-3-141-3-182.us-east-2.compute.amazonaws.com:8888",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})