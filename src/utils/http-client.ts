import axios from 'axios';
import router from '@/router/index';

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
	 timeout: 10000,
     withCredentials: false, // Not need required (CORS Origin)
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
    
  },
  (error) => {
    if(error.response.status === 401){
      localStorage.removeItem('accessToken')
      localStorage.removeItem('isAuth')
      router.push('/admin/login');
    }
    
    return Promise.reject(error);
  }
);
export default httpClient;


// httpClient.interceptors.response.use(
//     response => response,
//     async error => {
//       const originalRequest = error.config;
//       if (error.response.status === 401 &&!originalRequest._retry) {
//         originalRequest._retry = true;
//         try {
//           // Attempt to refresh the token
//           const response = await httpClient.post('/refresh-token');
//           const { token } = response.data;
//           // Store the new token in local storage or Vuex store
//           localStorage.setItem('token', token);
//           // Retry the original request
//           return httpClient(originalRequest);
//         } catch (refreshError) {
//           // Handle the case where refreshing the token fails
//           console.error('Failed to refresh token', refreshError);
//           // Optionally, redirect the user to the login page
//           window.location.href = '/login';
//           return Promise.reject(refreshError);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
