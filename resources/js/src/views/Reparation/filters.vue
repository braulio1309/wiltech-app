<template>
    <b-container>
        <b-row>
            <b-col lg="12" sm="12">
                <iq-card>
                    <div class="container">
                        <div class="card">
                            <div class="row">
                                <h4>Selecciona la marca y el modelo</h4>
                                <div class="col-sm-12">
                                    <b-form-group label="Analisis" label-for="email1">
                                        <input type="text" v-model="brand" class="form-control" required="">

                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row">
                                <h4></h4>
                                <div class="col-sm-12">
                                    <b-form-group label="Analisis" label-for="email1">
                                        <input type="text" v-model="model" class="form-control" required="">

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
            model: ''
        }
    },
    mounted() {
        core.index()
    },
    methods: {
        send() {
            // Guardar brand y model en el Local Storage
            localStorage.setItem('brand', this.brand);
            localStorage.setItem('model', this.model);

            // Redirigir a la vista "list"
            this.$router.push({ name: 'reparation.list' })
        }
    }
}
</script>
