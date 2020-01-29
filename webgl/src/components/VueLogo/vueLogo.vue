<template lang="pug">
  svg(:width="width" :height="height")
    polygon(:points="bigTriangle" style="fill: #99ff88")
    polygon(:points="middleTriangle" style="fill: purple")
    polygon(:points="smallTriangle" style="fill: white")
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number
  },
  data () {
    return {
    }
  },
  computed: {
    bigTriangle () {
      return `0,0 ${this.width},0 ${this.width / 2},${this.height}`
    },
    middleTriangle () {
      return `${this.width / 4},0 ${this.width / 4 * 3},0 ${this.width / 2},${this.height / 2}`
    },
    smallTriangle () {
      return `${this.width / 8 * 3},0 ${this.width / 8 * 5},0 ${this.width / 2}, ${this.height / 4}`
    }
  }
}
</script>
