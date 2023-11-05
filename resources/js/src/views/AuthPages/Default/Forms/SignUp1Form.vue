<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <div v-if="error" class="alert alert-danger">
       {{ (errorPassword == undefined)? errorPassword: errorEmail }}
      </div>
      <ValidationProvider vid="name" name="Full Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input type="text" v-model="user.name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="name" aria-describedby="emailHelp" placeholder="Nombre completo">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Correo eléctronico</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" v-model="user.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Contraseña">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        
        <button type="submit" class="btn btn-primary float-right">Registrarse</button>
      </div>
      <div class="sign-info">
          <span class="dark-color d-inline-block line-height-2">
            ¿Tienes una cuenta?
            <a id="login" ref="loginLink" href="/auth/sign-in1" class="iq-waves-effect pr-4">
                Iniciar sesión
            </a>
          </span>
         <!-- <social-login-form></social-login-form> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>

import SocialLoginForm from './SocialLoginForm';
import axios from 'axios';

export default {
  name: 'SignUp1Form',
  components: { SocialLoginForm },
  props: ['formType'],
  data: () => ({
    user: {
      email: '',
      password: '',
      name: ''
    },
    error: false,
    errorPassword: '',
    errorEmail: ''
  }),
  methods: {
    onSubmit () {
        this.jwtRegister();
      }
    ,
    async jwtRegister () {
      const register  = await axios.post('/api/auth/register', this.user);
      let data = register.data;

      if(data.message == 'Register Successfully'){ 
        this.error = false;
        const loginLink = this.$refs.loginLink;
        loginLink.click();
      }else{
        this.error = true;
        this.errorPassword = (data.errors.password != undefined)? data.errors.password[0]: '';
        this.errorEmail = (data.errors.email != undefined)? data.errors.email[0]: '';
      }
      
    },
    
  }
}
</script>
