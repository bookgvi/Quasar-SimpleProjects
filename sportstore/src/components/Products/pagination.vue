<template lang="pug">
  .products-class
    .row
      .col-lg
        q-select.q-pl-lg(:value="rowsPerPage" :options="options" @input ="setRowsPerPage" outlined dense)
      .col
        q-pagination.q-pl-lg(:value="currentPage", :max="maxPages" @click="setPage($event.target.innerText)")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'pagination',
  data: () => ({
    options: [2, 3, 5, 10, 20]
  }),
  computed: {
    ...mapGetters([
      'maxPages',
      'currentPage',
      'rowsPerPage'
    ])
  },
  methods: {
    ...mapActions([
      'setPage',
      'setRowsPerPage'
    ])
  }
}
</script>
