<template lang="pug">
  q-layout
    q-page-container
      titleMenu
      router-view
</template>

<script>
import titleMenu from '../components/Topmenu/titlemenu'
export default {
  name: 'MyLayout',
  components: { titleMenu },
  data () {
    return {
    }
  }
}
</script>
