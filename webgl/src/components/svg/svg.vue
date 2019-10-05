<template lang="pug">
  svg.q-ma-lg
    rect(
      x="10"
      y="20"
      width="150"
      height="100"
    )
    circle(
      cx="225"
      cy="75"
      r="50"
    )
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  circle {
    fill: orange;
    stroke: black;
    stroke-width: 2px;
  }
</style>
