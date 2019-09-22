<template lang="pug">
  .row
    .col-4.bg-primary.q-pa-lg
      .text-h4.q-pb-lg Categories
      .row
        .col
          CategoryList
    .col-8.bg-grey-2
      ProductList
</template>

<script>
import ProductList from './productList'
import CategoryList from './categoryList'
export default {
  name: 'productPage',
  components: { ProductList, CategoryList }
}
</script>

<style scoped>

</style>
