<template>
  <div id="page" class="hfeed site">
    <Header/>
    <!-- site-main -->
    <div id="main" class="site-main">

      <!-- primary -->
      <div id="primary" class="content-area">

        <!-- site-content -->
        <div id="content" class="site-content" role="main">

          <!-- InstanceBeginEditable name="FeaturedContent" -->

          <!-- InstanceEndEditable -->

          <!-- layout-medium -->
          <div class="layout-medium">

            <!-- InstanceBeginEditable name="LayoutMediumContent" -->

            <!-- entry-header -->
            <header class="entry-header">

              <h1 class="entry-title">GALLERY</h1>

            </header>
            <!-- entry-header -->

            <!-- .media-grid-wrap -->
            <div class="media-grid-wrap">

              <!-- GALLERY -->
              <div class="r-gallery masonry media-grid" data-layout="masonry" data-item-width="420">
                <div v-for="(item, index) in albums" v-bind:key="index">
                  <div class="media-cell hentry">

                    <div class="media-box">
                      <img :src="item.thumbnail" alt="gallery-post">
                      <div class="mask">
                        <div class="media-cell-desc">
                          <h3>{{item.title}}</h3>
                          <h4>{{ momentUnix(item.time).format('DD/MM/YYYY') }}</h4>
                        </div>
                      </div>
                      <a href="gallery-single.html"></a>
                    </div>

                  </div>
                </div>

              </div>
              <!-- GALLERY -->

            </div>
            <!-- .media-grid-wrap -->

            <!-- InstanceEndEditable -->

          </div>
          <!-- layout-medium -->

        </div>
        <!-- site-content -->

      </div>
      <!-- primary -->

    </div>
    <!-- site-main -->
    <Footer/>
  </div>
  <!-- page -->
</template>
<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import moment from 'moment'

export default {
  name: 'gallery',
  components: {
    Header,
    Footer
  },
  computed: {
    albums () {
      return this.$store.state.album.albums
    }
  },
  data () {
    return {
    }
  },
  filters: {
    momentUnix: function (time) {
      return moment.unix(time).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  methods: {
    momentUnix: function (time) {
      return moment.unix(time)
    }
  },
  beforeMount () {
    this.$store.dispatch('album/getAlbums')
  }
}
</script>

<style lang="scss" scoped>

@import "../css/bootstrap.min.css";
@import "../css/fonts/fontello/css/fontello.css";
@import "../js/jquery.uniform/uniform.default.css";
@import "../js/jquery.magnific-popup/magnific-popup.css";
@import "../js/jquery.fluidbox/fluidbox.css";
@import "../js/owl-carousel/owl.carousel.css";
@import "../js/selection-sharer/selection-sharer.css";
@import "../js/responsive-image-gallery/elastislide.css";
@import "../css/align.css";
@import "../css/main.css";
@import "../css/768.css";
@import "../css/992.css";

.login {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    padding: 30px 15px;
    background: #fff;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2),
    0 24px 38px 3px rgba(0, 0, 0, .14),
    0 9px 46px 8px rgba(0, 0, 0, .12);

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
