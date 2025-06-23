import axios from "axios";

const agent = axios.create({
    baseURL: 'https://localhost:5160/api'
});

export default agent;