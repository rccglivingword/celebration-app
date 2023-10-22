import axios from 'axios'

const Instance = axios.create({
    baseURL: 'https://rccgmedia-server.onrender.com',
    timeout: 2500
})

export default Instance