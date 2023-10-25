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
                                                <b-form-textarea id="exampleFormControlTextarea1"
                                                    rows="5" readonly value="Estado fisico regular"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <b-img :src="require('../../assets/images/small/img-1.jpg')" fluid alt="Responsive image"></b-img>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h4>Conecta la fuente y observa si carga</h4>
                                        <div class="col-sm-6">
                                            <b-form-group label="Observaciones" label-for="email1">
                                                <b-form-textarea id="exampleFormControlTextarea1"
                                                    rows="5" readonly value="Informacion de la fuente actual"></b-form-textarea>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-6">
                                            <b-form-group label="Pruebas" label-for="email1">
                                                <b-img :src="require('../../assets/images/small/img-1.jpg')" fluid alt="Responsive image"></b-img>
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
                                                <b-form-textarea id="exampleFormControlTextarea1"
                                                    rows="5" readonly value="Observaciones del equipo"></b-form-textarea>
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
                                            <b-form-textarea id="exampleFormControlTextarea1"
                                                    rows="5" readonly value="La solucion fue remover ciertos componentes"></b-form-textarea>                                        </b-form-group>
                                    </div>
                                    <div class="col-sm-6">
                                        <b-form-group label="Pruebas" label-for="email1">
                                            <b-img :src="require('../../assets/images/small/img-1.jpg')" fluid alt="Responsive image"></b-img>
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

export default {
    name: 'FormLayout',
    mounted() {
        core.index()
    },
    data() {
        return {
            selectedAge: '0-18',
            selected: ['select-1'],
            selected3: null,
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
    }
}
</script>
