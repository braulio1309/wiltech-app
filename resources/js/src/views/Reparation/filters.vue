<template>
    <b-container>
        <b-row>
            <b-col lg="12" sm="12">
                <iq-card>
                    <div class="container">
                        <div class="card">
                            <div class="row">
                                <h4>Selecciona la marca, el modelo y su falla</h4>
                                <div class="col-sm-12">
                                    <b-form-group label="Marca" label-for="email1">
                                        <select v-model="brand" class="form-control" id="brandSelect">
                                            <option value="iPhone" selected>iPhone</option>
                                        </select>

                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row">
                                <h4></h4>
                                <div class="col-sm-12">
                                    <b-form-group label="Modelo" label-for="email1">
                                        <select v-model="model" class="form-control" id="iphoneModels">
                                            <option value="iPhone 7">iPhone 7</option>
                                            <option value="iPhone 8">iPhone 8</option>
                                            <option value="iPhone 8 Plus">iPhone 8 Plus</option>
                                            <option value="iPhone X">iPhone X</option>
                                            <option value="iPhone XR">iPhone XR</option>
                                            <option value="iPhone XS">iPhone XS</option>
                                            <option value="iPhone XS Max">iPhone XS Max</option>
                                            <option value="iPhone 11">iPhone 11</option>
                                            <option value="iPhone 11 Pro">iPhone 11 Pro</option>
                                            <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
                                            <option value="iPhone SE">iPhone SE</option>
                                            <option value="iPhone 12">iPhone 12</option>
                                            <option value="iPhone 12 Mini">iPhone 12 Mini</option>
                                            <option value="iPhone 12 Pro">iPhone 12 Pro</option>
                                            <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
                                            <option value="iPhone 13">iPhone 13</option>
                                            <option value="iPhone 13 Mini">iPhone 13 Mini</option>
                                            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                                            <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
                                            <option value="iPhone 14">iPhone 14</option>
                                            <option value="iPhone 14 Plus">iPhone 14 Plus</option>
                                            <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                                            <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
                                            <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>

                                        </select>

                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row">
                                <h4></h4>
                                <div class="col-sm-12">
                                    <b-form-group label="Falla" label-for="email1">
                                        <select v-model="fail"  class="form-control" id="iphoneModels">
                                            <option value="Encendido">Encendido</option>
                                            <option value="Imagen">Imagen</option>
                                            <option value="Audio">Audio</option>
                                            <option value="Carga">Carga</option>
                                            <option value="Wifi">Wifi</option>
                                            <option value="Señal">Señal</option>
                                            <option value="Touch">Touch</option>
                                            <option value="Camaras">Camaras</option>
                                            <option value="Botones">Botones</option>
                                            <option value="Itunes">Itunes</option>
                                            <option value="DFV">DFV</option>
                                        </select>

                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button class="btn btn-primary" @click="send()">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </iq-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import axios from 'axios';

export default {
    name: 'Filters',
    data() {
        return {
            brand: '',
            model: '',
            fail: ''
        }
    },
    mounted() {
        core.index()
    },
    methods: {
        send() {            
            this.$router.push({ name: 'reparation.list', params: { brand: this.brand, model: this.model, fail: this.fail }})

        }
    }
}
</script>
