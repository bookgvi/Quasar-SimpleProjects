<template>
  <q-page class="flex">
<!--    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <product-view />
    <product-edit />
  </q-page>
</template>

<style>
</style>

<script>
import ProductView from '../components/ProductView'
import ProductEdit from '../components/ProductEdit'
export default {
  name: 'PageIndex',
  components: {
    ProductEdit,
    ProductView
  }
}
</script>
