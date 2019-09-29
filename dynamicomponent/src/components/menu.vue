<template lang="pug">
  .topmenu.q-py-xl
    q-page-sticky(position="top" style="border-bottom: 1px solid silver; z-index: 10000")
      q-tabs
        q-route-tab(to="dynamic")
          .inline-block.text-uppercase dynamic
        q-route-tab(to="first")
          .inline-block.text-uppercase first
        q-route-tab(to="second")
          .inline-block.text-uppercase second
        q-route-tab(to="third")
          .inline-block.text-uppercase third
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
