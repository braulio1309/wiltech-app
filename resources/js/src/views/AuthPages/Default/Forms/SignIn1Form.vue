<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <div v-if="error" class="alert alert-danger">
        Datos incorrectos, intente de nuevo.
      </div>
      <ValidationProvider vid="email" name="E-mail" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="emailInput">Email </label>
          <input type="email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="emailInput" aria-describedby="emailHelp"
                 v-model="user.email" placeholder="Ingrese su email" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Contraseña" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Contraseña</label>
          <!--<router-link to="/auth/password-reset1" class="float-right">
            Forgot password?
          </router-link>-->
          <input type="password"  :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="passwordInput"
                 v-model="user.password" placeholder="Password" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <label class="custom-control-label" :for="formType">Recuerdame</label>
        </div>
        <button type="submit" class="btn btn-primary float-right">Iniciar sesión</button>
      </div>
      <div class="sign-info">
          <span class="dark-color d-inline-block line-height-2">
            ¿No tienes cuenta?
            <a href="/auth/sign-up1" class="iq-waves-effect pr-4">
                Registrarse
            </a>
          </span>
         <!-- <social-login-form></social-login-form> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import SocialLoginForm from './SocialLoginForm'
import { mapGetters } from 'vuex'
import axios from 'axios';

export default {
  name: 'SignIn1Form',
  components: { SocialLoginForm },
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    error: false
  }),
  mounted () {
    this.user.email = this.$props.email
    this.user.password = this.$props.password
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
    onSubmit () {
      if (this.formType === 'passport') {
        this.passportLogin()
      } else if (this.formType === 'jwt') {
        this.jwtLogin()
      } else if (this.formType === 'firebase') {
        this.firebaseLogin()
      }
    },
   
    jwtLogin () {
     // Crear un objeto con los datos del formulario
     const loginData = {
        email: this.user.email,
        password: this.user.password,
      };

      // Realizar una solicitud POST a la URL de inicio de sesión
      axios
        .post('/api/auth/login', loginData)
        .then(response => {
            this.$store.dispatch('Setting/authUserAction', {
            auth: true,
            authType: 'jwt',
            user: {
              id: JSON.parse(response.data.data).id,
              name: JSON.parse(response.data.data).name,
              mobileNo: null,
              email: JSON.parse(response.data.data).email,
              profileImage: null
            }
          })
          localStorage.setItem('user', response.data.data)
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push({ name: 'dashboard.home-1' })
        })
        .catch(error => {
          this.error = true;
          console.error('Error de inicio de sesión', error);
          
        });
    },
   
  }
}
</script>
