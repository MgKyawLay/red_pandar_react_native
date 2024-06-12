import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const token = 'token will be here';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    
    return response;
  },
  error => {
    Promise.reject(error);
  },
);

export default apiClient;