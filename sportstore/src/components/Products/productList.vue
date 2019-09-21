<template lang="pug">
  .products-class
    .row.q-py-lg.q-pl-xl(v-for="item in getProduct" :key="item.id")
      q-card
        .text-h6 {{ item.name }}
    q-pagination.q-pl-lg(:value="currentPage", :max="maxPages" @click="setPage($event.target.innerText)")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'productList',
  computed: {
    ...mapGetters([
      'getProduct',
      'maxPages',
      'currentPage'
    ])
  },
  methods: {
    ...mapActions([
      'setPage'
    ])
  }
}
</script>
