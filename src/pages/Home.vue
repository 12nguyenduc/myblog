<template>
  <!-- page -->
  <div id="page" class="hfeed site">
    <Header/>
    <!-- site-main -->
    <div id="main" class="site-main">

      <!-- primary -->
      <div id="primary" class="content-area">

        <!-- site-content -->
        <div id="content" class="site-content" role="main">

          <!-- layout-fixed -->
          <div class="layout-fixed">

            <!-- InstanceBeginEditable name="LayoutFixedContent" -->

            <!-- blog-regular -->
            <div class="blog-regular">

              <div v-for="(item, index) in articles" v-bind:key="index">
                <article v-if="item.type === 3" class="hentry post format-audio"  >

                  <!-- .entry-header -->
                  <header class="entry-header">

                    <!-- .entry-title -->
                    <h1 class="entry-title"><a href="blog-single.html">{{item.title}}</a></h1>

                    <!-- .entry-meta -->
                    <div class="entry-meta">
                                        <span class="entry-date">
                                            <time class="entry-date" datetime="2014-07-13T04:34:10+00:00">{{momentUnix(item.time).format('DD/MM/YYYY') }}</time>
                                        </span>
                      <span class="read-time"><span class="eta"></span> read</span>
                      <span class="cat-links">
                                            <a href="#" title="View all posts in Music" rel="category tag">Music</a>,
                                            <a href="#" title="View all posts in Rythm" rel="category tag">Rythm</a>
                                        </span>
                    </div>
                    <!-- .entry-meta -->

                  </header>
                  <!-- .entry-header -->
                  <!-- .entry-content -->
                  <div class="entry-content">
                    <div v-html="item.urlSound"></div>
                    <p>{{item.content}}</p>

                  </div>
                  <!-- .entry-content -->

                </article>

                <article v-if="item.type === 1" class="hentry post">

                  <!-- .entry-header -->
                  <header class="entry-header">

                    <!-- .entry-title -->
                    <h1 class="entry-title"><a href="blog-single.html">{{ item.title }}</a></h1>

                    <!-- .entry-meta -->
                    <div class="entry-meta">
                                        <span class="entry-date">
                                        	<time class="entry-date">{{momentUnix(item.time).format('DD/MM/YYYY') }}</time>
                                        </span>
                      <span class="read-time"><span class="eta"></span> read</span>
                      <span class="cat-links">
                                            <a href="#" title="View all posts in Travel" rel="category tag">{{item.tag.join() }}</a>
                                        </span>
                      <!--<span class="edit-link">
                        <a class="post-edit-link" href="#">Edit</a>
                      </span>-->
                    </div>
                    <!-- .entry-meta -->

                  </header>
                  <!-- .entry-header -->

                  <!-- .featured-image -->
                  <div class="featured-image" v-if="item.cover!==''">
                    <a href="blog-single.html">
                      <img :src="item.cover" alt="blog-image">
                    </a>
                  </div>
                  <!-- .featured-image -->

                  <!-- .entry-content -->
                  <div class="entry-content">
                    <p>{{item.content}}</p>
                  </div>
                  <!-- .entry-content -->

                </article>

                <article v-if="item.type === 4" class="hentry post format-video">

                  <!-- .entry-header -->
                  <header class="entry-header">

                    <!-- .entry-title -->
                    <h1 class="entry-title"><a href="blog-single.html">{{item.title}}</a></h1>

                    <!-- .entry-meta -->
                    <div class="entry-meta">
                                        <span class="entry-date">
                                            <time class="entry-date" datetime="2014-07-13T04:34:10+00:00">{{momentUnix(item.time).format('DD/MM/YYYY') }}</time>
                                        </span>
                      <span class="read-time"><span class="eta"></span> read</span>
                      <span class="cat-links">
                                            <a href="#" title="View all posts in Adventure" rel="category tag">Street</a>
                                        </span>
                    </div>
                    <!-- .entry-meta -->

                  </header>
                  <!-- .entry-header -->

                  <!-- .entry-content -->
                  <div class="entry-content">

                    <div v-html="item.urlYoutube"></div>
                    <p>{{item.content}}</p>
                  </div>
                  <!-- .entry-content -->

                </article>

                <article v-if="item.type === 2" class="hentry post format-gallery">

                  <!-- .entry-header -->
                  <header class="entry-header">

                    <!-- .entry-title -->
                    <h1 class="entry-title"><a href="blog-single.html">{{item.title}}</a></h1>

                    <!-- .entry-meta -->
                    <div class="entry-meta">
                                        <span class="entry-date">
                                            <time class="entry-date" datetime="2014-07-13T04:34:10+00:00">{{momentUnix(item.time).format('DD/MM/YYYY') }}</time>
                                        </span>
                      <span class="read-time"><span class="eta"></span> read</span>
                      <span class="cat-links">
                                            <a href="#" title="View all posts in Life" rel="category tag">Life</a>
                                        </span>
                    </div>
                    <!-- .entry-meta -->

                  </header>
                  <!-- .entry-header -->

                  <!-- .entry-content -->
                  <div  class="entry-content">

                    <!-- .gallery -->
                    <div v-for="(image, index) in item.images.map((_,i)=>i).filter(i=>(i+1)%3===0)" v-bind:key="index">

                      <div class="gallery gallery-columns-3 gallery-size-thumbnail">
                        <figure class="gallery-item">
                          <div class="gallery-icon landscape">
                            <img width="150" height="150" :src="item.images[image-2]" class="attachment-thumbnail" alt="Golden Gate Bridge">
                          </div>
                        </figure>
                        <figure class="gallery-item">
                          <div class="gallery-icon landscape">
                            <img width="150" height="150" :src="item.images[image-1]" class="attachment-thumbnail" alt="Golden Gate Bridge">
                          </div>
                        </figure>
                        <figure class="gallery-item">
                          <div class="gallery-icon landscape">
                            <img width="150" height="150" :src="item.images[image]" class="attachment-thumbnail" alt="Golden Gate Bridge">
                          </div>
                        </figure>
                      </div>
                    </div>

                    <!-- .gallery -->

                    <p>{{item.content}}</p>

                  </div>
                  <!-- .entry-content -->

                </article>

                <article v-if="item.type === 5" class="hentry post format-quote">

                  <header class="entry-header">

                    <h1 class="entry-title"><a href="blog-single.html">{{item.title}}</a></h1>

                    <div class="entry-meta">
                                        <span class="entry-date">
                                            <time class="entry-date" datetime="2014-07-13T04:34:10+00:00">{{momentUnix(item.time).format('DD/MM/YYYY') }}</time>
                                        </span>
                      <span class="read-time"><span class="eta"></span> read</span>
                      <span class="cat-links">
                                            <a href="#" title="View all posts in Quote" rel="category tag">Quote</a>
                                        </span>
                    </div>

                  </header>

                  <div class="entry-content">

                    <blockquote>{{item.content}}
                      <cite>{{item.author}}</cite>
                    </blockquote>

                  </div>

                </article>

              </div>

              <!-- post nav -->
              <nav class="navigation" role="navigation">
                <div class="nav-previous"><a href="#"><span class="meta-nav">←</span> Older posts</a></div>
                <!--<div class="nav-next"><a href="#">Newer posts <span class="meta-nav">→</span></a></div>-->
              </nav>
              <!-- post nav -->

            </div>
            <!-- blog-regular -->

            <!-- InstanceEndEditable -->

          </div>
          <!-- layout-fixed -->

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
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import moment from 'moment'
export default {
  name: 'IndexPage',

  components: {
    Header,
    Footer
  },
  computed: {
    articles () {
      return this.$store.state.article.articles
    }
  },
  data () {
    return {
      msg: 'Welcome to Index!!!',
      isShownModal: false,
      inputError: false,
      checkboxState: false,

      pagination: {
        limit: 20,
        offset: 0,
        total: 60
      }
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
    },
    showToast () {
      console.log('aaa')
      this.$store.commit('toast/NEW', { type: 'success', message: 'hello' })
    },
    submitModalHandler () {
      // some logic
      this.isShownModal = false
    },
    onBlur () {
      console.log('onBlur!!!')
    },
    onEnter () {
      console.log('onEnter!!!')
    },
    onEsc () {
      console.log('onEsc!!!')
    },
    onClickIcon () {
      console.log('onClickIcon!!!!')
    }
  },
  beforeMount () {
    this.$store.dispatch('article/getArticles')
  }
}
</script>

<style lang="scss" scoped>
@import '../css/bootstrap.min.css';
@import '../css/fonts/fontello/css/fontello.css';
@import '../css/align.css';
@import '../css/main.css';
@import '../css/768.css';
@import '../css/992.css';
.some-modal-content {
  min-width: 400px;
  padding: 25px;

  .buttons button {
    padding: 10px;
    margin: 10px;
  }
}
</style>
