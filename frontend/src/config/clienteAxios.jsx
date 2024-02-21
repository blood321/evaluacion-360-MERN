import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export default clienteAxios