<template>
  <!-- header -->
  <header id="masthead" class="site-header" role="banner">

    <!-- site-navigation -->
    <nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">

      <a class="menu-toggle"><span class="lines"></span></a>

      <!-- nav-menu -->
      <div class="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="project">Project</a></li>
          <li><a href="gallery">Gallery</a></li>
          <li><a href="resume">About Me</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>
      <!-- nav-menu -->

      <a class="search-toggle toggle-link"></a>

      <!-- search-container -->
      <div class="search-container">

        <div class="search-box">
          <form role="search" method="get" class="search-form" action="#">
            <label>Search for
              <input type="search" id="search-field" placeholder="type and hit enter" name="s">
            </label>
            <input type="submit" class="search-submit" value="Search">
          </form>
        </div>

      </div>
      <!-- search-container -->

      <!-- social-container -->
      <div class="social-container">

        <ul class="social">
          <li><a class="facebook" href="https://www.facebook.com/ictduc" target="_blank"></a></li>
          <li><a class="twitter" href="https://twitter.com/nguyenducvn92" target="_blank"></a></li>
          <!--            <li><a class="google-plus" href="#"></a></li>-->
          <!--            <li><a class="dribbble" href="#"></a></li>-->
          <li><a class="instagram" href="https://www.instagram.com/nguyenduc12/" target="_blank"></a></li>
          <li><a class="soundcloud" href="https://soundcloud.com/nguyengerm" target="_blank"></a></li>
          <li><a class="pinterest" href="https://www.pinterest.com/ictduc" target="_blank"></a></li>
        </ul>
      </div>
      <!-- social-container -->

    </nav>
    <!-- site-navigation -->

    <!-- site-title -->
    <h1 class="site-title">
      <a href="#" rel="home">
        <img src="../assets/images/site/logo_blog.png" alt="logo">
        <!--EDITOR-->
      </a>
    </h1>
    <!-- site-title -->

    <!--<h1 class="site-title">
      <a href="../index.html" rel="home">
            EDITOR
        </a>
    </h1>
    <p class="site-description">just another minimalist theme.</p>-->

  </header>
  <!-- header -->
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  padding: 20px 0;
  position: relative;

  .is-active {
    color: #e01b3c;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    font-size: 25px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 15px;

    }

    &.side {
      font-size: 15px;

      .logout-button {
        cursor: pointer;
      }
    }
  }
}
</style>
