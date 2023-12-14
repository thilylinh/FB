/* eslint-disable */
import { isObjEmpty, isStrEmpty } from "@/utils/utils";
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


export function setDataLanguage(data: any) {
    localStorage.setItem('dataLanguage', data)
}

export function getDataLanguage() {
    return localStorage.getItem('dataLanguage')
}
