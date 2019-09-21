<template lang="pug">
  .products-class
    .row.q-py-lg.q-pl-xl(v-for="item in getProduct" :key="item.id")
      q-card
        .text-h6 {{ item.name }}
    .row
      q-select.q-pl-lg(:value="rowsPerPage" :options="options" @input ="setRowsPerPage" outlined dense)
      q-pagination.q-pl-lg(:value="currentPage", :max="maxPages" @click="setPage($event.target.innerText)")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'productList',
  data: () => ({
    options: [2, 3, 5, 10, 20]
  }),
  computed: {
    ...mapGetters([
      'getProduct',
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
