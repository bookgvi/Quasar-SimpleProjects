<template lang="pug">
  .row
    .col
      q-btn(
        v-for="(tab, index) in tabs"
        :key="index"
        @click="currentTab = tab"
        :class="{ active: currentTab === tab }"
      ) {{ tab }}
      .row(style="height: 640px; border: 1px solid black")
        .col.q-pa-lg
          .inline-block(:is="currentTab")
</template>

<script>
import first from './first'
import second from './second'
import third from './third'
export default {
  // name: 'ComponentName',
  components: { first, second, third },
  data () {
    return {
      currentTab: 'first',
      tabs: ['first', 'second', 'third']
    }
  }
}
</script>

<style scoped>
  .q-btn.active {
    background: silver;
  }
</style>
