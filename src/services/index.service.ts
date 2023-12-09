import BaseService from "./base.service";

const VUE_APP_API_URL = process.env.VUE_APP_API_URL;
class IndexService extends BaseService {
    //https://racing-api.bitville-api.com/api/locale?account=prod-afribet-com&lang=en
    getLocale(account: string, lang: string) {
        return this.get(`${VUE_APP_API_URL}/api/locale?account=${account}&lang=${lang}`).then(({ data }) => data)
      }
}
export default new IndexService()