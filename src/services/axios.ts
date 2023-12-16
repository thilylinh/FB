/* eslint-disable */
import axiosLib from "axios";

const axiosAuth = axiosLib.create();

axiosAuth.interceptors.request.use((request) => {
    return request;
});

axiosAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    }
);

export default axiosAuth;
