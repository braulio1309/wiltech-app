<template>
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <div class="iq-sidebar-logo">
        <div class="top-logo">
          <router-link :to="{ name: 'dashboard.home-1' }" class="logo">
            <div class="iq-light-logo">
              <img src="../../../../assets/images/logofix.png" class="img-fluid" alt="logo">
            </div>
            <div class="iq-dark-logo">
              <img src="../../../../assets/images/logo-dark.gif" class="img-fluid" alt="logo">
            </div>
            <span>{{ appName }}</span>
          </router-link>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light p-0">

        <b-navbar-toggle target="nav-collapse" class="">
          <i class="ri-menu-3-line"></i>
        </b-navbar-toggle>
        <div class="iq-menu-bt align-self-center" v-if="$route.meta.layout !== 'two-sidebar'">
          <div class="wrapper-menu" @click="sidebarMini">
            <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
            <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
          </div>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav ml-auto navbar-list">




          </ul>
        </b-collapse>
        <ul class="navbar-list">
          <li class="rounded" v-nav-toggle>
            <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
              <img src="../../../../assets/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user">
              <div class="caption">
                <h6 class="mb-0 line-height text-white">{{ this.user.name }}</h6>
              </div>
            </a>
            <div class="iq-sub-dropdown iq-user-dropdown">
              <div class="iq-card shadow-none m-0">
                <div class="iq-card-body p-0 ">
                  <div class="bg-primary p-3">
                    <h5 class="mb-0 text-white line-height">Hola {{ this.user.name }}</h5>
                  </div>

                  <router-link :to="{ name: 'user.edit' }" class="iq-sub-card iq-bg-primary-hover">
                    <div class="media align-items-center">
                      <div class="rounded iq-card-icon iq-bg-primary">
                        <i class="ri-profile-line"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="mb-0 ">Editar perfil</h6>
                        <p class="mb-0 font-size-12">Modifica tu información</p>
                      </div>
                    </div>
                  </router-link>

                  <div class="d-inline-block w-100 text-center p-3">
                    <a class="btn btn-primary dark-btn-primary" href="javascript:void(0)" @click="logout"
                      role="button">Cerrar sesión<i class="ri-login-box-line ml-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import GlobalSearch from '../../search/GlobalSearch'
import { core, APPNAME } from '../../../../config/pluginInit'
import langChange from '../../../../Mixins/langchange'
import Lottie from '../../../../components/core/lottie/Lottie'
export default {
  name: 'HeaderStyle',
  mixins: [langChange],
  components: {
    // HoverMenu,
    GlobalSearch,
    // CollapseMenu
    Lottie
  },
  data() {
    return {
      appName: APPNAME,
      globalSearch: '',
      user: ''
    }
  },
  mounted() {
    this.me();
    if (!this.horizontal) {
      document.addEventListener('click', this.closeSearch, true)
    }
  },
  methods: {
    sidebarMini() {
      core.triggerSet()
    },
    removeClass() {
      this.showSearch = false
      this.showMenu = ''
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null && document.getElementById('searchbox-datalink') !== undefined) {
        document.getElementById('searchbox-datalink').classList.remove('show-data')
      }
    },
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    },
    me() {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user)

    },
    ...mapActions({
      removeToCart: 'Ecommerce/removeToCartAction',
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction'
    })

  },

  computed: {
    ...mapGetters({
      cartCount: 'Ecommerce/cartCountState',
      cartItems: 'Ecommerce/cartState',
      bookmark: 'Setting/bookmarkState',
      langsOptions: 'Setting/langOptionState',
      selectedLang: 'Setting/langState'
    })
  }
}
</script>
