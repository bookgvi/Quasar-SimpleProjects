<template>
  <q-page class="flex flex-center">
<!--    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <product-view />
  </q-page>
</template>

<style>
</style>

<script>
import ProductView from '../components/ProductView'
export default {
  name: 'PageIndex',
  components: {
    ProductView
  }
}
</script>
