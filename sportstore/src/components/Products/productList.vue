<template lang="pug">
  .products-class
    .row.q-py-sm(v-for="item in getProducts" :key="item.id")
      .col
        q-card.q-px-md.q-py-md
          .text-h6 {{ item.name }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'productList',
  computed: {
    ...mapGetters([
      'getProducts'
    ])
  }
}
</script>
