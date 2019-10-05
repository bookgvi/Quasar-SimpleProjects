<template lang="pug">
  .topMenu
    vueLogo
    q-tabs
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
