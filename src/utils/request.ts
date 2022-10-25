import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type RawAxiosRequestHeaders,
} from "axios";
interface RequestParams<T> {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  data?: T;
  params?: T;
}
function request<T>(requestParams: RequestParams<T>) {
  // 创建axios实例
  const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL as string,
    // 超时
    timeout: 15000,
  });
  service.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";

  // 请求拦截器
  service.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
      // 可以在这更新请求header，包括用户token
      // 默认的Content-Type
      (config.headers as RawAxiosRequestHeaders)["Content-Type"] =
        (config.headers as RawAxiosRequestHeaders)["Content-Type"] ||
        "application/json";
      // 若存在token则带token
      const token = window.localStorage.getItem("token");
      if (token) {
        (config.headers as RawAxiosRequestHeaders).Authorization = token;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  // 响应拦截器
  // any类型后面根据后端格式来进行ts数据接口定义
  service.interceptors.response.use((response: AxiosResponse<any, any>) => {
    console.log(response);
    return response;
  });
  return service(requestParams);
}

export default request;
