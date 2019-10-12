<template lang="pug">
  q-tr
    q-td(v-for="({ name, __tdClass }, index) in cols" :key="index" :class="__tdClass")
      template(v-if="name === 'id'") {{ row.id }}
        span
      template(v-if="name === 'firstName'") {{ row.firstName }}
        span
</template>

<script>
export default {
  name: 'tableRow',
  props: {
    row: Object,
    cols: Array
  }
}
</script>

<style scoped>

</style>
