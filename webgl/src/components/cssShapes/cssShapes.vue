<template lang="pug">
  .cssShapes
    .row.q-ma-lg.justify-center
      .text-h4 CSS Shapes
    .row.q-ma-lg.justify-center
      div.q-mr-sm.emptysquare
      div.q-mr-sm.triangle
      div.circle
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .emptysquare {
    width: 150px;
    height: 100px;
    border-left: 50px solid #777777;
    border-right: 50px solid #777777;
    border-bottom: 50px solid #777777;
    background: #ffffff;
  }
  .triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #777;
  }
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #777;
  }
</style>
