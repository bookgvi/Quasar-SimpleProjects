<template lang="pug">
  .row
    .col
      q-btn(
        v-for="(tab, index) in tabs"
        :key="index"
        @click="currentTab = tab"
        :class="{ active: currentTab === tab }"
        flat
      ) {{ tab }}
      .row(style="height: 1640px; border: 1px solid silver")
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
  .q-btn {
    border-top: 1px solid silver;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
    border-bottom: 1px solid white;
  }
  .q-btn.active {
    background: silver;
  }
</style>
