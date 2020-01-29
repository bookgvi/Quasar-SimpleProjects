<template lang="pug">
  .row
    .col-4.bg-primary.q-pa-lg
      .text-h4.q-pb-lg Categories
      .row
        .col
          CategoryList
    .col-8.bg-grey-2.q-pa-lg
      .row.q-pb-md
        .col
          .text-h4 Products
        .col-lg
          Pagination
      .row
        .col
          ProductList
</template>

<script>
import ProductList from './productList'
import CategoryList from './categoryList'
import Pagination from './pagination'
import { mapActions } from 'vuex'
export default {
  name: 'productPage',
  components: {
    ProductList,
    CategoryList,
    Pagination
  },
  async mounted () {
    await this.fetchData()
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  }
}
</script>

<style scoped>

</style>
