<template lang="pug">
  .products
    .row
      .col-4.bg-primary
        .text-h4 Categories
      .col-8.bg-green
        ProducList
</template>

<script>
import ProducList from './productList'
export default {
  name: 'productPage',
  components: { ProducList }
}
</script>

<style scoped>

</style>
