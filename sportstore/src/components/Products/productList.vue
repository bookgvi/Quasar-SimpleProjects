<template lang="pug">
  .products-class
    .row.q-py-sm(v-for="item in getProducts" :key="item.id")
      .col
        q-card.q-px-md.q-py-md
          .row
            .col
              .text-h6 {{ item.name }}
            .col-3
              q-chip
                .text-h6 $ {{ item.price }}
          .row
            .inline-block {{ item.description }}
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
