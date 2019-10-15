<template lang="pug">
  .input.row.q-pt-lg.justify-center
    .col-9
      .row
        .input.col.q-pr-sm
          q-input(v-model="input1" outlined dense)
        .col
          q-btn.bg-grey.text-white(label="Add field")
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    input1: ''
  })
}
</script>
