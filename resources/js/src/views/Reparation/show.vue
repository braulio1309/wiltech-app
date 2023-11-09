<template>
    <b-container>
        <b-row>
            <b-col lg="12" sm="12">
                <iq-card>
                    <tab-nav :pills="true" class="nav-fill mb-3" id="pills-tab-1">
                        <tab-nav-items :active="true" id="info-tab" href="#info" ariaControls="info" role="tab"
                            :ariaSelected="true" title="Información" />
                        <tab-nav-items :active="false" id="pills-home-tab-fill" href="#pills-home-fill"
                            ariaControls="pills-home-fill" role="tab" :ariaSelected="false" title="Diagnóstico" />
                        <tab-nav-items :active="false" id="pills-profile-tab-fill" href="#pills-profile-fill"
                            ariaControls="pills-profile-fill" role="tab" :ariaSelected="false" title="Análisis" />
                        <tab-nav-items :active="false" id="pills-contact-tab-fill" href="#pills-contact-fill"
                            ariaControls="pills-contact-fill" role="tab" :ariaSelected="false" title="Solución" />
                    </tab-nav>
                    <tab-content id="pills-tabContent-1" class="mt-0" v-if="reparation != null">
                        <tab-content-item :active="true" id="info" aria-labelled-by="info-tab" >
                            <div class="container">
                                <div class="card">
                                    <div class="row">
                                        <h4>1. Marca</h4>
                                        <b-form-group >

                                        <div class="col-sm-12">
                                            <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                v-model="reparation.brand"></b-form-textarea>
                                        </div>
                                        </b-form-group>
                                    </div>
                                    <div class="row">
                                        <h4>2. Modelo</h4>
                                        <div class="col-sm-12">
                                            <b-form-group >
                                                <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                v-model="reparation.model"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h4>3. Falla</h4>
                                        <div class="col-sm-12">
                                            <b-form-group >
                                                <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                v-model="reparation.fail"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tab-content-item>
                        <tab-content-item :active="false" id="pills-home-fill" aria-labelled-by="pills-home-tab-fill">
                            <div class="container">
                                <div class="card">
                                    <div class="row">
                                        <h4>4. Estado fisico del equipo</h4>
                                        <div class="col-sm-6">
                                            <b-form-group label="Describe el estado del equipo" label-for="email1">
                                                <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                    v-model="reparation.state"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <b-img v-if="reparation.img_state" :src="require('../../../../../storage/app/'+reparation.img_state)" fluid
                                                    alt="Responsive image"></b-img>
                                                <span v-else class="alert alert-info">No se cargaron pruebas</span>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h4>5. Conecta la fuente y observa si carga</h4>
                                        <div class="col-sm-6">
                                            <b-form-group label="Observaciones" label-for="email1">
                                                <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                v-model="reparation.observation"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <b-img v-if="reparation.img_observation" :src="require('../../../../../storage/app/'+reparation.img_observation)" fluid
                                                    alt="Responsive image"></b-img>
                                                <span v-else class="alert alert-info">No se cargaron pruebas</span>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tab-content-item>
                        <tab-content-item :active="false" id="pills-profile-fill" aria-labelled-by="pills-profile-tab-fill">
                            <div class="container">
                                <div class="card">
                                    <div class="row">
                                        <h4>6. Anota tus observaciones</h4>
                                        <div class="col-sm-12">
                                            <b-form-group label="Analisis" label-for="email1">
                                                <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                                v-model="reparation.analysis"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab-content-item>
                        <tab-content-item :active="false" id="pills-contact-fill" aria-labelled-by="pills-contact-tab-fill">
                            <div class="container">
                                <div class="row">
                                    <h4>7. Describe la solucion encontrada</h4>
                                    <div class="col-sm-6">
                                        <b-form-group label="Observaciones" label-for="email1">
                                            <b-form-textarea id="exampleFormControlTextarea1" rows="5" readonly
                                            v-model="reparation.solution"></b-form-textarea>
                                        </b-form-group>
                                    </div>
                                    <div class="col-sm-6">
                                        <b-form-group label="Pruebas" label-for="email1">
                                            <b-img v-if="reparation.img_solution" :src="require('../../../../../storage/app/'+reparation.img_solution)" fluid
                                                alt="Responsive image"></b-img>
                                            <span v-else class="alert alert-info">No se cargaron pruebas</span>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>

                        </tab-content-item>
                    </tab-content>
                </iq-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import axios from 'axios';

export default {
    name: 'FormLayout',
    mounted() {
        core.index();
        this.getReparation();

    },
    data() {
        return {
            selectedAge: '0-18',
            selected: ['select-1'],
            selected3: null,
            reparation: null,
            options1: [
                { value: '0-18', text: '0-18' },
                { value: '18-26', text: '18-26' },
                { value: '26-46', text: '26-46' },
                { value: '46-60', text: '46-60' },
                { value: 'Above 60', text: 'Above 60' }
            ],
            options2: [
                { value: 'select-1', text: 'select-1' },
                { value: 'select-2', text: 'select-2' },
                { value: 'select-3', text: 'select-3' },
                { value: 'select-4', text: 'select-4' },
                { value: 'select-5', text: 'select-5' },
                { value: 'select-6', text: 'select-6' },
                { value: 'select-7', text: 'select-7' },
                { value: 'select-8', text: 'select-8' }
            ],
            checked1: true,
            checked2: true,
            checked3: true,
            radio1: false,
            radio2: true,
            radio3: true,
            radio5: true,
            radio6: 'true',
            radio7: false,
            radio8: 'dissel',
            switch1: true,
            options3: [
                { value: '1', text: 'One' },
                { value: '2', text: 'Two' },
                { value: '3', text: 'Three' }
            ]
        }
    },
    methods: {
        getReparation() {
            axios.get('/api/reparations/'+ this.$route.params.id)
                .then(response => {
                    // Manejar la respuesta exitosa
                    console.log('Respuesta exitosa:', response.data.reparation);
                    this.reparation = response.data.reparation;
                })
                .catch(error => {
                    // Manejar errores
                    console.error('Error en la solicitud:', error);
                });
        }
    }
}
</script>
