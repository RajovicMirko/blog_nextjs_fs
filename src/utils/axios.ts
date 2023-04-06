import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

type UpdateAxiosConfig = {
  token: string;
};

export const axiosInterceptorsSetup = ({
  token,
}: UpdateAxiosConfig): Promise<void> => {
  return new Promise((res) => {
    API.interceptors.request.use((config) => {
      config.headers.Authorization = token ? `Bearer ${token}` : null;
      return config;
    });

    res();
  });
};

axiosInterceptorsSetup({ token: process.env.NEXT_PUBLIC_API_TOKEN as string });

export default API;
