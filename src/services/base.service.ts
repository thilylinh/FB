/* eslint-disable */
// import axios from 'axios';
import axiosAuth from "@/services/axios";
import { getQueryParams } from "@/utils/utils";

class BaseService {
  get<T = unknown>(url: string, data?: unknown) {
    return axiosAuth.get(url, {
      headers: {
        "Auth-Account": getQueryParams().account,
        "Auth-Token": getQueryParams().token,
      },
      data,
    });
  }

  post<T = unknown>(url: string, data: unknown) {
    return axiosAuth.post(url, data, {
      headers: {
        "Auth-Account": getQueryParams().account,
        "Auth-Customer-Id": getQueryParams().customerId,
        "Auth-Token": getQueryParams().token,
      },
    });
  }

  put<T = unknown>(url: string, data: unknown) {
    return axiosAuth.put(url, data);
  }

  delete<T = unknown>(url: string) {
    return axiosAuth.delete(url);
  }
}

export default BaseService;
