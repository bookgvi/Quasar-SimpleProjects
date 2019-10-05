<template lang="pug">
  .topMenu.q-pt-lg
    q-tabs
      vueLogo(:width=50 :height=30)
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
