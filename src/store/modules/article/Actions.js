import { ArticleService } from '@/services/article.service'

export default {
  getArticles ({ commit }) {
    return ArticleService.getArticles()
      .then(data => {
        console.log(data.data)
        commit('SET_ARTICLES', data.data)
      })
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
