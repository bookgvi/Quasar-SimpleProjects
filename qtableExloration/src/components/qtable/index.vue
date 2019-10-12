<template lang="pug">
  .qtable
    q-table(
      :columns="columns"
      :data="data"
    )
      template(#top-left)
        .text-h4.q-pa-sm {{ tableTitle }}
      template(#header-cell="props")
        q-th.text-center.text-grey {{ props.col.label }}
      template(#body="props")
        table-row(v-bind="props" :rowData="rowData" @rowDialog="rowDialog")
      template(#bottom)
        span {{ tableBottom }}
</template>

<script>
import TableRow from './tableRow'
export default {
  components: { TableRow },
  props: {
    columns: Array,
    data: Array,
    tableTitle: String,
    tableBottom: String,
    rowData: Object
  },
  methods: {
    rowDialog (rowData) {
      this.$emit('rowDialog', rowData)
    }
  }
}
</script>

<style scoped>

</style>
