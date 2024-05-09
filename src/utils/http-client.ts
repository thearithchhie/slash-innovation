import axios from 'axios';

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
	 timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});
export default httpClient;