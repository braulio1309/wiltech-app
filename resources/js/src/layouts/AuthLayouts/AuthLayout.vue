<template>
  <div>
    <Loader />
    <section class="sign-in-page">
      <b-container class="bg-white mt-5 p-0">
        <div class="row no-gutters">
          <div class="col-sm-6 align-self-center">
            <div class="sign-in-from">
              <router-view></router-view>
            </div>
          </div>
          <div class="col-sm-6 text-center" :style="'background: url('+bgImageURL+') no-repeat 0 0; background-size:  70% auto; background-position: center;'">
            <div class="sign-in-detail text-white" >
              
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>
<script>
import Loader from '../../components/core/loader/Loader'
import logo from '../../assets/images/logo-white.png'
import { core } from '../../config/pluginInit'
import bgImage from '../../assets/images/login/login-1.jpg'
import Swiper from '../../components/core/slider/Swiper'
import SwiperSlide from '../../components/core/slider/SwiperSlide'
export default {
  name: 'AuthLayout',
  components: {
    Loader,
    Swiper,
    SwiperSlide
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>
<style>
  @import url("../../assets/css/custom.css");
</style>
