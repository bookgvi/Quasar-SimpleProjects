<template lang="pug">
  .category-class
    .row.q-pb-md(v-for="(item, index) in getUniqCategories" :key="index")
      .col
        q-card
          .text-h6.q-pa-sm.cursor-pointer(@click="setCurrentCategory(item)") {{ item }}
    .row
      .col
        q-card
          .text-h6.q-pa-sm.cursor-pointer(@click="setCurrentCategory('all')") All
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
