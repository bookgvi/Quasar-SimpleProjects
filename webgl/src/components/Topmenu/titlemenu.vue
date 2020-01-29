<template lang="pug">
  .topMenu.q-pt-lg
    .row.justify-center
      vueLogo(:width=50 :height=40)
    q-tabs(align="center")
      q-route-tab(to="css" label="css")
      q-route-tab(to="svg" label="svg")
</template>

<script>
import vueLogo from '../VueLogo/vueLogo'
export default {
  components: { vueLogo },
  data () {
    return {}
  }
}
</script>
