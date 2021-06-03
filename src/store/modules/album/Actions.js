import { AlbumsService } from '@/services/album.service'

export default {
  getAlbums ({ commit }) {
    return AlbumsService.getAlbums()
      .then(data => {
        console.log(data.data)
        commit('SET_ALBUMS', data.data)
      })
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
