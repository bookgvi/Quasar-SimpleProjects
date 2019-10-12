<template lang="pug">
  .qtable.q-pt-lg
    .row.q-pb-md.justify-center
      .col-6
        qtableComponent(
          :columns="columns"
          :data="data"
          tableTitle="Humans"
          @rowDialog="rowDialog"
        )
    .row.justify-center
      .qqq {{ data }}
    q-dialog(v-model="isModal")
      q-card
        modalDialog(
          :rowData="rowData"
          @hasModal="hasModal"
          @saveChanges="saveChanges"
        )
</template>

<script>
import Vue from 'vue'
import qtableComponent from '../qtable'
import columns from './columns'
import modalDialog from './modalDialog'
export default {
  name: 'index',
  components: {
    qtableComponent,
    modalDialog
  },
  data: () => ({
    columns,
    data: [
      { id: 1, firstName: 'John' },
      { id: 2, firstName: 'Yan' }
    ],
    isModal: false,
    rowData: {}
  }),
  methods: {
    rowDialog (rowData) {
      this.rowData = rowData
      this.isModal = true
    },
    hasModal () {
      this.isModal = false
    },
    saveChanges (value) {
      // First way to change data
      for (let key in value) {
        Vue.set(this.rowData, key, value[key])
      }
      // second way
      // this.data.forEach(item => {
      //   if (item.id === value.id) {
      //     for (let key in value) {
      //       Vue.set(item, key, value[key])
      //     }
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.q-card {
  min-width: 600px;
}
</style>
