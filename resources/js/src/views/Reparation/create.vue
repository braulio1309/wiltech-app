<template>
    <b-container>
        <b-row>
            <b-col lg="12" sm="12">
                <iq-card>
                    <tab-nav :pills="true" class="nav-fill mb-3" id="pills-tab-1">
                        <tab-nav-items :active="true" id="pills-home-tab-fill" href="#pills-home-fill"
                            ariaControls="pills-home-fill" role="tab" :ariaSelected="true" title="Diagnostico" />
                        <tab-nav-items :active="false" id="pills-profile-tab-fill" href="#pills-profile-fill"
                            ariaControls="pills-profile-fill" role="tab" :ariaSelected="false" title="Analisis" />
                        <tab-nav-items :active="false" id="pills-contact-tab-fill" href="#pills-contact-fill"
                            ariaControls="pills-contact-fill" role="tab" :ariaSelected="false" title="Solucion" />
                    </tab-nav>
                    <tab-content id="pills-tabContent-1" class="mt-0">
                        <tab-content-item :active="true" id="pills-home-fill" aria-labelled-by="pills-home-tab-fill">
                            <div class="container">
                                <div class="card">
                                    <div class="row">
                                        <h4>Estado fisico del equipo</h4>
                                        <div class="col-sm-6">
                                            <b-form-group label="Describe el estado del equipo" label-for="email1">
                                                <b-form-textarea v-model="reparation.state" id="state"
                                                    rows="5"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <input type="file" @change="onFileState">
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h4>Conecta la fuente y observa si carga</h4>
                                        <div class="col-sm-6">
                                            <b-form-group label="Observaciones" label-for="email1">
                                                <b-form-textarea v-model="reparation.observation" id="observation"
                                                    rows="5"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <input type="file" @change="onFileObservation">
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
                                        <h4>Anota tus observaciones</h4>
                                        <div class="col-sm-12">
                                            <b-form-group label="Analisis" label-for="email1">
                                                <b-form-textarea v-model="reparation.analysis" id="analysis"
                                                    rows="5"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab-content-item>
                        <tab-content-item :active="false" id="pills-contact-fill" aria-labelled-by="pills-contact-tab-fill">
                            <div class="container">
                                <div class="row">
                                    <h4>Describe la solucion encontrada</h4>
                                    <div class="col-sm-6">
                                        <b-form-group label="Observaciones" label-for="email1">
                                            <b-form-textarea v-model="reparation.solution" id="solution" rows="5"></b-form-textarea>
                                        </b-form-group>
                                    </div>
                                    <div class="col-sm-6">
                                        <b-form-group label="Pruebas" label-for="email1">
                                            <input type="file" @change="onFileSolution">
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="row">
                                    <button class="btn btn-primary" @click="createReparation">Guardar</button>
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
    data() {
        return {
            selectedAge: '0-18',
            selected: ['select-1'],
            selected3: null,
            reparation: {
                state: '',
                img_state: '',
                observation: '',
                img_observation: '',
                analysis: '',
                solution: '',
                img_solution: ''
            },
        }
    },
    mounted() {
        core.index()
    },
    methods: {
        createReparation() {
            const formData = new FormData();
            formData.append('state', this.reparation.state);
            formData.append('img_state', this.reparation.img_state);
            formData.append('observation', this.reparation.observation);
            formData.append('img_observation', this.reparation.img_observation);
            formData.append('analysis', this.reparation.analysis);
            formData.append('img_solution', this.reparation.img_solution);
            formData.append('solution', this.reparation.solution);
            // Agrega otros campos a formData

            axios.post('/api/reparations/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    // Handle success
                    console.log('Reparation created successfully:', response.data)
                    // Puedes redirigir al usuario o realizar otras acciones aquí
                })
                .catch(error => {
                    // Handle error
                    console.error('Error creating reparation:', error)
                })
        },
        onFileObservation(event) {
            this.reparation.img_observation = event.target.files[0];
        },
        onFileState(event) {
            this.reparation.img_state = event.target.files[0];
        },
        onFileSolution(event) {
            this.reparation.img_solution = event.target.files[0];
        },
    }
}
</script>
