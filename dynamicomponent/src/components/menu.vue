<template lang="pug">
  .navbar
    q-page-sticky(expand position="top")
    q-tabs
      q-route-tab(to="dynamic")
        .inline-block.text-uppercase dynamic
      q-route-tab(to="first")
        .inline-block.text-uppercase first
      q-route-tab(to="second")
        .inline-block.text-uppercase second
      q-route-tab(to="third")
        .inline-block.text-uppercase third
    q-separator
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
