<template>
  <q-page class="flex flex-center">
<!--    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'fuck',
      'a'
    ])
  }
}
</script>
