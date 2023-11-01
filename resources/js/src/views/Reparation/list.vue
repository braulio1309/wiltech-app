<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Lista de reparaciones</h4>
          </template>
          <template v-slot:headerAction>
            <b-button variant="primary">Añadir nueva</b-button>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12" class="table-responsive" v-if="rows.length > 0">
                <b-table bordered hover :items="rows" :fields="columns" foot-clone>
                  <template v-slot:cell(state)="data">
                    <span v-if="1">{{ data.item.state }}</span>
                    <input type="text" v-model="data.state" v-else class="form-control">
                  </template>
                  <template v-slot:cell(observation)="data">
                    <span v-if="true">{{ data.item.observation }}</span>
                    <input type="text" v-model="data.observation" v-else class="form-control">
                  </template>
                  <template v-slot:cell(analysis)="data">
                    <span v-if="true">{{ data.item.analysis }}</span>
                    <input type="text" v-model="data.analysis" v-else class="form-control">
                  </template>
                  <template v-slot:cell(solution)="data">
                    <span v-if="true">{{ data.item.solution }}</span>
                    <input type="text" v-model="data.solution" v-else class="form-control">
                  </template>
                  <template v-slot:cell(created_at)="data">
                    <span v-if="1">{{ data.item.created_at | formatDate }}</span>
                    <input type="text" v-model="data.item.created_at" v-else class="form-control">
                  </template>
                  <template v-slot:cell(brand)="data">
                    <span v-if="1">{{ data.item.brand }}</span>
                    <input type="text" v-model="data.item.brand" v-else class="form-control">
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant=" iq-bg-success mr-1 mb-1" size="sm" @click="sendDetails(data)"><i class="ri-ball-pen-fill m-0"></i></b-button>

                  </template>
                </b-table>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import axios from 'axios';

export default {
  name: 'UiDataTable',
  methods: {
    add() {

    },
    edit(item) {
      item.editable = true
    },
    submit(item) {
      item.editable = false
    },
    remove(item) {
    }
  },
  data() {
    return {
      columns: [
        { label: 'Título', key: 'state', class: 'text-left' },
        { label: 'Diagnostico', key: 'observation', class: 'text-left' },
        { label: 'Solucion', key: 'solution', class: 'text-left' },
        { label: 'Marca', key: 'brand', class: 'text-left' },
        { label: 'Modelo', key: 'model', class: 'text-left' },
        { label: 'Fecha', key: 'created_at', class: 'text-left' },
        { label: 'Action', key: 'action', class: 'text-center' }
      ],
      rows: []
    }
  },
  methods: {
    getReparations() {

      const brand = localStorage.getItem('brand');
      const model = localStorage.getItem('model');
     
      axios.get('/api/reparations/'+brand+'/'+model)
        .then(response => {
          // Manejar la respuesta exitosa
          console.log('Respuesta exitosa:', response.data.reparations);
          this.rows = response.data.reparations;
        })
        .catch(error => {
          // Manejar errores
          console.error('Error en la solicitud:', error);
        });
    },
    sendDetails(data){
      console.log(data.item.id)
      this.$router.push({ name: 'reparation.show', params: { id: data.item.id } })

    }
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        // Formatea la fecha utilizando JavaScript
        const date = new Date(value);
        return date.toLocaleDateString();
      }
    }
  },
  mounted() {
    core.index()
    this.getReparations();
  }
}
</script>
  