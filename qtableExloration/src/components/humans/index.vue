<template lang="pug">
  .qtable.q-pt-lg
    .row.justify-center
      .col-6
        qtableComponent(
          :columns="columns"
          :data="data"
          tableTitle="Humans"
        )
</template>

<script>
import qtableComponent from '../qtable'
import columns from './columns'
export default {
  name: 'index',
  components: {
    qtableComponent
  },
  data: () => ({
    columns,
    data: [
      { id: 1, firstName: 'John' },
      { id: 2, firstName: 'Yan' }
    ]
  })
}
</script>

<style scoped>

</style>
