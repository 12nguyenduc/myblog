import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'

export class ArticleService extends BaseService {
  static get entity () {
    return '/api/v1'
  }

  static async getArticles () {
    try {
      const response = await this.request().get(`${this.entity}/articles`)
      console.log(response)
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
