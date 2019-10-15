<template lang="pug">
  .input
    .row
      .input.col
        q-input(v-model="input1" outlined dense)
      .col
        q-btn(label="Add field")
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    input1: ''
  })
}
</script>

<style scoped>

</style>
