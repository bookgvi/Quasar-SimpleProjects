<template lang="pug">
  .row.q-ma-lg
    div.triangle1
    div.triangle2
    div.triangle3
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .triangle1 {
    position: absolute;
    width: 0;
    height: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    border-top: 96px solid #407753;
    z-index: 1000;
  }
  .triangle2 {
    position: absolute;
    left: 48px;
    width: 0;
    height: 0;
    border-right: 27px solid transparent;
    border-left: 27px solid transparent;
    border-top: 52px solid #430077;
    z-index: 1001;
  }
  .triangle3 {
    position: absolute;
    left: 63px;
    width: 0;
    height: 0;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
    border-top: 25px solid #fff;
    z-index: 1002;
  }
  .emptysquare {
    width: 100px;
    height: 100px;
    border-left: 50px solid #777777;
    border-right: 50px solid #777777;
    border-bottom: 100px solid #777777;
  }
</style>
