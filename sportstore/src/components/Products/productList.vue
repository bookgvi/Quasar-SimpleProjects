<template lang="pug">
  .products-class
    .row.q-pb-lg.q-pl-xl(v-for="item in getProduct" :key="item.id")
      q-card
        .text-h6 {{ item.name }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'productList',
  computed: {
    ...mapGetters([
      'getProduct'
    ])
  }
}
</script>
