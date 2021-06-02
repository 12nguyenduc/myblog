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

          <!-- layout-fixed -->
          <div class="layout-fixed">

            <!-- InstanceBeginEditable name="LayoutFixedContent" -->

            <!-- .hentry -->
            <article class="hentry page">

              <header class="entry-header">
                <h1 class="entry-title">Contact Me</h1>
              </header>

              <!-- .entry-content -->
              <div class="entry-content">

                <h3 class="section-title">I am a social guy :)</h3>

                <!-- SOCIAL -->
                <ul class="social">
                  <li><a class="facebook" href="https://www.facebook.com/ictduc" target="_blank"></a></li>
                  <li><a class="twitter" href="https://twitter.com/nguyenducvn92" target="_blank"></a></li>
                  <!--            <li><a class="google-plus" href="#"></a></li>-->
                  <!--            <li><a class="dribbble" href="#"></a></li>-->
                  <li><a class="instagram" href="https://www.instagram.com/nguyenduc12/" target="_blank"></a></li>
                  <li><a class="soundcloud" href="https://soundcloud.com/nguyengerm" target="_blank"></a></li>
                  <li><a class="pinterest" href="https://www.pinterest.com/ictduc" target="_blank"></a></li>
                  <!--<li><a class="rss" href="#"></a></li>
                  <li><a class="behance" href="#"></a></li>
                  <li><a class="vimeo" href="#"></a></li>
                  <li><a class="forrst" href="#"></a></li>
                  <li><a class="skype" href="#"></a></li>
                  <li><a class="picasa" href="#"></a></li>
                  <li><a class="youtube" href="#"></a></li>
                  <li><a class="flickr" href="#"></a></li>
                  <li><a class="tumblr" href="#"></a></li>
                  <li><a class="blogger" href="#"></a></li>
                  <li><a class="delicious" href="#"></a></li>
                  <li><a class="digg" href="#"></a></li>
                  <li><a class="friendfeed" href="#"></a></li>
                  <li><a class="wordpress" href="#"></a></li>
                  <li><a class="stack-overflow" href="#"></a></li>
                  <li><a class="foursquare" href="#"></a></li>
                  <li><a class="xing" href="#"></a></li>
                  <li><a class="weibo" href="#"></a></li>
                  <li><a class="soundcloud" href="#"></a></li>
                  <li><a class="fivehundredpx" href="#"></a></li>
                  <li><a class="slideshare" href="#"></a></li>-->
                </ul>
                <!-- SOCIAL -->

                <h3 class="section-title">Or mail me!</h3>

                <!-- .contact-form -->
                <div class="contact-form">

                  <form id="contact-form" class="validate-form contact-form" @submit.prevent="sendEmail">

                    <!-- enter mail subject here -->
                    <input type="hidden" name="subject" id="subject" value="You have a new message from Editor!">

                    <p>
                      <label for="name">NAME</label>
                      <input type="text" name="name" id="name" class="required">
                    </p>

                    <p>
                      <label for="email">EMAIL</label>
                      <input type="text" name="email" id="email" class="required email">
                    </p>

                    <p class="antispam">Leave this empty if you are a human :
                      <br /><input name="url" />
                    </p>

                    <p>
                      <label for="message">MESSAGE</label>
                      <textarea name="message" id="message" class="required"></textarea>
                    </p>

                    <p>
                      <button class="submit button" type="submit"><span class="submit-label">Submit</span><span class="submit-status"></span></button>
                    </p>

                  </form>

                </div>
                <!-- .contact-form -->

              </div>
              <!-- .entry-content -->

            </article>
            <!-- .hentry -->

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
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import emailjs from 'emailjs-com'
export default {
  name: 'contact',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  },

  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_khcwj1c', 'template_1rqg9ec', e.target, 'user_LNNeG9LOSPYK65B6WpQ6V')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>

<style scoped>
.button{
  padding: 16px;
}
</style>
