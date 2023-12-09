/* eslint-disable */
import { getStateStore, isObjEmpty, isStrEmpty } from "@/utils/utils";
import axiosLib from "axios";

const axiosAuth = axiosLib.create();

axiosAuth.interceptors.request.use((request) => {
    const state = getStateStore();
    const token = state.token || "";
    const setting = state.configDevice;

    if (!isStrEmpty(token)) {
        request.headers.Authorization = token;
        request.headers.ContentType = "application/json";
    }

    if (!isObjEmpty(setting)) {
        request.headers["Device-Network-Mac-Address"] = setting.mac;
        request.headers["Device-Serial-Number"] = setting.serial;
        request.headers["Device-Unique-Id"] = setting.uniqueId;
        request.headers["App-Version"] = setting.appVersion;
    }

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
