import axios from "axios";

const baseURL = process.env.REACT_BASE_URL

const fetchClient = axios.create({
    baseURL
})

export default fetchClient