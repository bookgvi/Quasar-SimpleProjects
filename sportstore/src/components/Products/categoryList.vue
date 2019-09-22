<template lang="pug">
  .category-class
    .row.q-pb-md(v-for="(item, index) in getUniqCategories" :key="index")
      .col
        q-card.cursor-pointer(@click="hClick(item, index)" :class="{ 'bg-info': isActive[index] }")
          .row
            .text-h6.q-pa-sm {{ item }}
    .row
      .col
        q-card.cursor-pointer(@click="hClick('all')" :class="{ 'bg-info': isAll }")
          .text-h6.q-pa-sm All
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
export default {
  name: 'categoryList',
  data: () => ({
    isActive: [],
    isAll: false
  }),
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getFilteredCategories',
      'getUniqCategories'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentCategory'
    ]),
    hClick (item, index) {
      if (item !== 'all') {
        this.isActive = []
        this.isAll = false
        Vue.set(this.isActive, index, 'true')
        this.setCurrentCategory(item)
      } else {
        this.isActive = []
        this.isAll = true
      }
      this.setCurrentCategory(item)
    }
  }
}
</script>

<style scoped>

</style>
