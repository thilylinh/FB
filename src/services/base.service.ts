import axios from 'axios';

class BaseService {
  get(url: string, data?: unknown) {
    return axios.get(url, {
      data,
    });
  }

  post(url: string, data: unknown) {
    return axios.post(url, data);
  }

  put(url: string, data: unknown) {
    return axios.put(url, data);
  }

  delete(url: string) {
    return axios.delete(url);
  }
}

export default BaseService;
