import axios from "axios";

const baseURL = "https://redux-toolkit-jobster-api-server.onrender.com/api/v1/"

const fetchClient = axios.create({
    baseURL
})

export default fetchClient