<template lang="pug">
  .category-class
    .row.q-pb-md(v-for="(item, index) in getUniqCategories" :key="index")
      q-card
        .text-h6.q-pa-sm(@click="setCurrentCategory(item)") {{ item }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'categoryList',
  computed: {
    ...mapGetters([
      'getFilteredCategories',
      'getUniqCategories'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentCategory'
    ])
  }
}
</script>

<style scoped>

</style>
