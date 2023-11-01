<template>
  <div>
    <h1 class="mb-0">Inicio de sesión</h1>
    <p>Ingresa al panel administrativo.</p>
    <tab-nav :pills="true" class="nav-fill mb-3" id="pills-tab-1">
      
      
    </tab-nav>
    <tab-content id="pills-tabContent-1" class="mt-0">
      <tab-content-item :active="true" id="pills-jwt-fill" aria-labelled-by="pills-jwt-tab-fill">
          <sign-in1-form formType="jwt" email="admin@demo.com" password="admin123"></sign-in1-form>
      </tab-content-item>
      <tab-content-item :active="false" id="pills-firebase-fill" aria-labelled-by="pills-firebase-tab-fill">
        <sign-in1-form formType="firebase" email="admin@vito.com" password="admin123"></sign-in1-form>
      </tab-content-item>
      <tab-content-item :active="false" id="pills-oauth0-fill" aria-labelled-by="pills-oauth0-tab-fill">
        <div class="height-300 pb-4 d-flex justify-content-center">
          <a href="javascript:void(0)" @click="loginOAuth0()" class="btn btn-danger align-self-center">
            OAuth0 Login
          </a>
        </div>
      </tab-content-item>
    </tab-content>
  </div>
</template>

<script>
import auth0 from 'auth0-js'
import SignIn1Form from './Forms/SignIn1Form'
import constant from '../../../config/constant'

export default {
  name: 'SignIn1',
  components: { SignIn1Form },
  data: () => ({}),
  mounted () {
    const loggedIn = localStorage.getItem('access_token')
    if (loggedIn !== undefined && loggedIn !== null) {
      this.$router.push({ name: 'mini.dashboard.home-2' })
    }
  },
  methods: {
    loginOAuth0: function () {
      new auth0.WebAuth(constant.auth0Config).authorize()
    }
  }
}
</script>
