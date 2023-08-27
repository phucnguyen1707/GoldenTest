/* eslint-disable */
import axios from "axios";

export const useApi = (baseUrl, useToken = false) => {
  // const dispatch = useDispatch();
  axios.interceptors.request.use(
    (request) => {
      request.baseURL = baseUrl;
      if (request.headers) {
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (res) {
      return { data: res?.data, status: res?.data?.status, success: true };
    },

    function (error) {
      if (error?.response?.data) {
        throw {
          response: error?.response?.data,
          success: false,
        };
      }
      throw error;
      return Promise.reject(error);
    }
  );

  return axios;
};
