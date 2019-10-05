<template lang="pug">
  q-page
    triangle
    rect-svg
</template>

<script>
import triangle from '../components/cssShapes/cssShapes'
import rectSvg from '../components/svg/svg'
export default {
  name: 'triangles',
  components: {
    triangle,
    rectSvg
  }
}
</script>
