<template lang="pug">
  .tableRow
    q-tr {{ row }}
</template>

<script>
export default {
  name: 'tableRow',
  props: {
    row: Object
  }
}
</script>

<style scoped>

</style>
