<template>
  <div>
    <h1 class="mb-0">Registrate</h1>
    <p>Ingresa tus datos para entrar al panel de reparaciones Fixtool.</p>
    <sign-up1-form formType="jwt"></sign-up1-form>

  </div>
</template>
<script>

import SignUp1Form from './Forms/SignUp1Form'
import auth0 from 'auth0-js'
import constant from '../../../config/constant'

export default {
  name: 'SignUp1',
  components: { SignUp1Form },
  data: () => ({}),
  methods: {
    loginOAuth0 () {
      new auth0.WebAuth(constant.auth0Config).authorize()
    }
  }
}
</script>
