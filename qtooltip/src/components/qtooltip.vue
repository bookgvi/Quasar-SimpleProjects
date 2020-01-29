<template lang="pug">
  .main-class
    q-page-sticky(expand position="top")
      .text-h5 Static content
    .text-h5(style="height: 10000px;") Holly, Vue2

</template>

<script>
import content from './content'
export default {
  components: { content },
  data () {
    return {}
  }
}
</script>
