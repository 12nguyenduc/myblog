<template>

  <!-- site-footer -->
  <footer id="colophon" class="site-footer" role="contentinfo">

    <!-- layout-medium -->
    <div class="layout-medium">

      <!-- footer-social -->
      <div class="footer-social">

        <ul class="social">
          <li><a class="facebook" href="https://www.facebook.com/ictduc"></a></li>
          <li><a class="twitter" href="https://twitter.com/nguyenducvn92"></a></li>
          <li><a class="instagram" href="https://www.instagram.com/nguyenduc12/"></a></li>
          <li><a class="soundcloud" href="https://soundcloud.com/nguyengerm"></a></li>
          <li><a class="pinterest" href="https://www.pinterest.com/ictduc"></a></li>
        </ul>

      </div>
      <!-- footer-social -->

      <!-- footer-sidebar -->
      <div class="footer-sidebar widget-area" role="complementary">

        <!-- widget -->
        <aside class="widget widget_text">
          <h3 class="widget-title">About Me</h3>
          <div class="textwidget">
            <img src="../assets/images/site/about-small.jpg" alt="avatar"> <p>Hello. I am a developer mobile. I live in Ha Noi, Viet Nam.</p>
          </div>
        </aside>
        <!-- widget -->

        <!-- widget -->
        <aside class="widget widget_tag_cloud">
          <h3 class="widget-title">Tags</h3>
          <div class="tagcloud"> <a href="#" title="1 topic" style="font-size: 8pt;">adaptive</a> <a href="#" title="2 topics" style="font-size: 22pt;">design</a> <a href="#" title="1 topic" style="font-size: 8pt;">html</a> <a href="#" title="2 topics" style="font-size: 22pt;">responsive</a> <a href="#" title="2 topics" style="font-size: 22pt;">think</a> <a href="#" title="1 topic" style="font-size: 8pt;">web design</a> <a href="#" title="1 topic" style="font-size: 8pt;">css</a> <a href="#" title="2 topics" style="font-size: 22pt;">animations</a> <a href="#" title="1 topic" style="font-size: 8pt;">layout</a> <a href="#" title="2 topics" style="font-size: 14pt;">mobile</a> <a href="#" title="2 topics" style="font-size: 22pt;">think</a> <a href="#" title="1 topic" style="font-size: 8pt;">typography</a> </div>
        </aside>
        <!-- widget -->

        <!-- widget : categories -->
        <aside class="widget widget_categories">
          <h3 class="widget-title">Categories</h3>
          <ul>
            <li class="cat-item"><a href="#" title="View all posts filed under Nature">Nature</a></li>
            <li class="cat-item"><a href="#" title="View all posts filed under Life">Life</a></li>
            <li class="cat-item"><a href="#" title="View all posts filed under Adventure">Adventure</a></li>
            <li class="cat-item"><a href="#" title="View all posts filed under Freebies">Travel</a></li>
            <li class="cat-item"><a href="#" title="View all posts filed under Sport">Sport</a></li>
          </ul>
        </aside>
        <!-- widget : categories -->

        <!-- widget -->
        <aside class="widget widget_recent_entries">
          <h3 class="widget-title">Recent Posts</h3>
          <ul>
            <li><a href="#">Runaway A Road Adventure</a></li>
            <li><a href="#">All In Our Head</a></li>
          </ul>
        </aside>
        <!-- widget -->
      </div>
      <!-- footer-sidebar -->
    </div>
    <!-- layout-medium -->
    <!-- .site-info -->
    <div class="site-info">
      <!-- layout-medium -->
      <div class="layout-medium">
        <p>crafted with <i class="pw-icon-heart"></i> <em>by</em> Nguyen Duc</p>
      </div>
      <!-- layout-medium -->
    </div>
    <!-- .site-info -->
  </footer>
  <!-- site-footer -->
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: #ccc;
  padding: 40px 0;
  width: 100%;
  margin-top: auto;
}
</style>
