<template lang="pug">
  .svgShapes
    .row.justify-center.q-py-md
      .text-h4 Move rectangle
    .row
      .col-6.q-px-xl x: {{ moveX.min }}/{{ moveX.max }}
        q-range(
          v-model.number="moveX"
          :max="svgMaxWidth"
          :min="0"
        )
      .col-6.q-px-xl y: {{ moveY.min }}/{{ moveY.max }}
        q-range(
          v-model.number="moveY"
          :max="svgMaxHeight"
          :min="0"
        )
    .row.justify-center
      .col
        svg.q-ml-sm.bg-grey-3(:width="svgMaxWidth" :height="svgMaxHeight")
          rect(
            :x="maxX"
            :y="maxY"
            :width="rectW"
            :height="rectH"
          )
</template>

<script>
export default {
  data () {
    const svgMaxWidth = document.documentElement.clientWidth - 20
    const svgMaxHeight = document.documentElement.clientHeight * 0.7
    const moveX = {
      min: 0,
      max: svgMaxWidth
    }
    const moveY = {
      min: 0,
      max: svgMaxHeight
    }
    return {
      rectW: 150,
      rectH: 100,
      svgMaxWidth,
      svgMaxHeight,
      moveX,
      moveY
    }
  },
  computed: {
    maxX () {
      return Math.min(this.moveX.min + 2, this.svgMaxWidth - this.rectW - 2)
    },
    maxY () {
      return Math.min(this.moveY.min + 2, this.svgMaxHeight - this.rectH - 2)
    }
  }
}
</script>

<style scoped>
  rect {
    fill: orange;
    stroke: black;
    stroke-width: 2px;
  }
</style>
