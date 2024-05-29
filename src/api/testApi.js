import axios from "axios"

const testApi = axios.create({
    baseURL:"http://localhost:4000/admin"
})

export default testApi