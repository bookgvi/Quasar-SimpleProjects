<template lang="pug">
  .row
    div.q-ma-lg.square
    div.q-ma-lg.circle
    div.q-ma-lg.triangle
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .square {
    width: 100px;
    height: 100px;
    background: #777;
  }
  .circle {
    height: 100px;
    width: 100px;
    background: #777;
    border-radius: 50%;
  }
  .triangle {
    width: 0px;
    height: 0px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #777;
  }
</style>
