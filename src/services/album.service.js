import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'

export class AlbumsService extends BaseService {
  static get entity () {
    return '/api/v1'
  }

  static async getAlbums () {
    try {
      const response = await this.request().get(`${this.entity}/albums`)
      console.log(response)
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
