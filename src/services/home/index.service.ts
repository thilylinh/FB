import BaseService from "../base.service";

const VUE_APP_API_URL = process.env.VUE_APP_API_URL;

class IndexService extends BaseService {
    getListNews() {
        return this.get(`${VUE_APP_API_URL}/News/news-list`).then(({ data }) => data)
    }
    getNewsDetails(id: any) {
        return this.get(`${VUE_APP_API_URL}/News/news-detail?id=${id}`).then(({ data }) => data)
    }
}
export default new IndexService()