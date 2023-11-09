<template>
  <b-container fluid="">
    <b-row>
      <b-col md="6" sm="6" lg="12">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex d-flex align-items-center justify-content-between">
              <div>
                <h2>{{ rows.length }}</h2>
                <p class="fontsize-sm m-0">Reparaciones reportadas</p>
              </div>
              <div class="rounded-circle iq-card-icon  dark-icon-light iq-bg-primary "> <i class="ri-inbox-fill"></i>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Mis reparaciones</h4>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12" class="table-responsive">
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
                    <b-button variant=" iq-bg-success mr-1 mb-1" size="sm" @click="sendDetails(data)"><i
                        class="ri-ball-pen-fill m-0"></i></b-button>

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
import AmChart from '../../components/core/charts/AmChart'
import ApexChart from '../../components/core/charts/ApexChart'
import ChartistChart from '../../components/core/charts/ChartistChart'
export default {
  name: 'Dashboard1',
  components: { AmChart, ApexChart, ChartistChart },
  mounted() {
    core.index();
    this.getReparations();

  },
  methods: {
    getReparations() {

      axios.get('/api/reparations/user/'+ JSON.parse(localStorage.getItem('user')).id)
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
      this.$router.push({ name: 'reparation.show', params: { id: data.item.id } })

    }
  },
  data() {
    return {
      columns: [
        { label: 'Título', key: 'state', class: 'text-left' },
        { label: 'Diagnóstico', key: 'observation', class: 'text-left' },
        { label: 'Solución', key: 'solution', class: 'text-left' },
        { label: 'Marca', key: 'brand', class: 'text-left' },
        { label: 'Modelo', key: 'model', class: 'text-left' },
        { label: 'Fecha', key: 'created_at', class: 'text-left' },
        { label: 'Accion', key: 'action', class: 'text-center' }
      ],
      rows: []
    }
  }
}
</script>

<style>
.iq-card-body {
  flex: unset;
}
</style>
