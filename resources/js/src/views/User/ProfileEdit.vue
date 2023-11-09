<template>
  <b-container fluid>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <b-row>
          <b-col lg="12">
            <iq-card body-class="p-0">
              <template v-slot:body>
                <div class="iq-edit-list">
                  <tab-nav :pills="true" class="iq-edit-profile d-flex">
                    <tab-nav-items class="col-md-3 p-0" :active="true" href="#personal-information"
                      title="Información personal" />
                    <tab-nav-items class="col-md-3 p-0" :active="false" href="#chang-pwd" title="Cambiar contraseña" />

                  </tab-nav>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="12">
            <div class="iq-edit-list-data">
              <tab-content id="pills-tabContent-2">
                <tab-content-item :active="true" id="personal-information">
                  <iq-card>
                    <template v-slot:headerTitle>
                      <h4 class="card-title">Información personal</h4>
                    </template>
                    <template v-slot:body>
                      <div v-if="success" class="col-12">
                        <div class="alert alert-success" role="alert">
                          Datos guardados correctamente
                        </div>
                      </div>
                      <!--<b-form-group class="row align-items-center">
                        <b-col md="12">
                          <div class="profile-img-edit">
                            <b-img v-if="user.profile_image" :src="require('../../../../../storage/app/'+user.profile_image)" class="profile-pic height-150 width-150" alt="profile-pic" />
                            <input type="file" class="form-control" @change="previewImage">

                          </div>
                        </b-col>
                      </b-form-group>-->
                      <b-row align-v="center">
                        <b-form-group class="col-md-12" label="Nombre completo" label-for="fname">
                          <ValidationProvider name="Nombre completo" rules="required" v-slot="{ errors }">
                            <b-form-input v-model="user.name" type="text" placeholder="First Name"
                              :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-md-12" label="Email" label-for="uname">
                          <ValidationProvider name="User name" rules="required" v-slot="{ errors }">
                            <b-form-input v-model="user.email" type="email" placeholder="Email"
                              :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-md-12" label="Telefono" label-for="uname">
                          <ValidationProvider name="phone" rules="required" v-slot="{ errors }">
                            <b-form-input v-model="user.phone" type="text" placeholder="Telefono"
                              :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-md-12" label="Telefono" label-for="uname">
                          <ValidationProvider name="bio" v-slot="{ errors }">
                            <b-form-textarea v-model="user.bio" type="text" placeholder="Biografía"
                              :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-textarea>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                      </b-row>
                      <b-button type="submit" variant="primary" class="mr-2" @click="saveData">Guardar</b-button>
                    </template>
                  </iq-card>
                </tab-content-item>
                <tab-content-item :active="false" id="chang-pwd">
                  <iq-card>
                    <template v-slot:headerTitle>
                      <h4 class="card-title">Cambiar contraseña</h4>
                    </template>
                    <template v-slot:body>
                      <b-form-group>
                        <label for="cpass">Contraseña actual:</label>
                        <!--<b-link href="javascripe:void();" class="float-right">Forgot Password</b-link>-->
                        <b-form-input @focusout="changePassword()" type="password" id="cpass"
                          v-model="currentPassword"></b-form-input>
                      </b-form-group>
                      <b-form-group class="col-md-6" label="Nueva contraseña:" label-for="pass">
                        <ValidationProvider name="Password" rules="confirmed:repeat_password" v-slot="{ errors }">
                          <b-form-input v-model="user.password" type="password" placeholder="Contraseña"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group class="col-md-6" label="Repita la contraseña:" label-for="rpass">
                        <ValidationProvider vid="repeat_password" name="Repeat Password" rules="required"
                          v-slot="{ errors }">
                          <b-form-input v-model="user.repeat_password" type="password" placeholder="Repetir contraseña"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-button type="submit" variant="primary" class="mr-2" @click="savePassword">Guardar</b-button>
                    </template>
                  </iq-card>
                </tab-content-item>

              </tab-content>
            </div>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import axios from 'axios';

export default {
  name: 'ProfileEdit',
  mounted() {
    core.index();
    this.actualInfo();
  },
  data() {
    return {
      user: {
        fname: '',
        lname: '',
        name: '',
        username: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        company_name: '',
        profile_image: '',
        mobile_no: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        role: '',
        gender: '',
        dob: '',
        url: '',
        bio: '',
        phone: ''
      },
      success: false,
      currentPassword: '',
      countries: [
        { value: 'Canada', text: 'Canada' },
        { value: 'Niada', text: 'Niada' },
        { value: 'USA', text: 'USA' },
        { value: 'India', text: 'India' },
        { value: 'Africa', text: 'Africa' }
      ],
      states: [
        { value: 'California', text: 'California' },
        { value: 'Florida', text: 'Florida' },
        { value: 'Georgia', text: 'Georgia' },
        { value: 'Connecticut', text: 'Connecticut' },
        { value: 'Louisiana', text: 'Louisiana' }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.user.name = this.user.fname + ' ' + this.user.lname

      // Update user
      this.$firestoreRefs.user.update(this.user).then(() => {
        core.showSnackbar('success', 'User has been added successfully.')
      })

      this.$router.replace('/user/user-list')
    },
    async previewImage(e) {

      this.user.profile_image = e.target.files[0];

    },
    changePassword: function () {
    },
    saveData() {
      const formData = new FormData();
      formData.append('name', this.user.name);
      formData.append('email', this.user.email);
      formData.append('bio', this.user.bio);
      formData.append('phone', this.user.phone);
      formData.append('profile_image', this.user.profile_image);

      console.log(formData)
      let user = JSON.parse(localStorage.getItem('user'));

      axios.put('/api/auth/update/' + user.id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          //'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // Handle success
          console.log('user updated:', response.data);
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 5000);
          localStorage.setItem('user', JSON.stringify(response.data.user))
        })
        .catch(error => {
          // Handle error
          console.error('Error creating reparation:', error)
        })
    },
    savePassword() {
      let data = {
        password: this.user.password,
      }
      let user = JSON.parse(localStorage.getItem('user'));
      axios.put('/api/auth/update/' + user.id, data)
        .then(response => {
          // Handle success
          console.log('user updated:', response.data)
        })
        .catch(error => {
          // Handle error
          console.error('Error creating reparation:', error)
        })
    },
    actualInfo() {
      this.user.name = JSON.parse(localStorage.getItem('user')).name;
      this.user.email = JSON.parse(localStorage.getItem('user')).email;
      this.user.phone = JSON.parse(localStorage.getItem('user')).phone;
      this.user.bio = JSON.parse(localStorage.getItem('user')).bio;
      this.user.profile_image = JSON.parse(localStorage.getItem('user')).profile_image;

    }
  }
}
</script>
