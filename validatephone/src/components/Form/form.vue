<template lang="pug">
  .form
    .row.q-pb-sm
      span Enter number:
    .row.q-pb-md
      q-input(
        :value="tel"
        @change.native="hInput"
        placeholder="+7 (900) 800 1234"
        outlined
        dense
      )
</template>

<script>
export default {
  props: {
    tel: String
  },
  data: () => ({
  }),
  methods: {
    hInput (e) {
      let value = e.target.value
      console.log(value)
    }
  }
}
</script>
