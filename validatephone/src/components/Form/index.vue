<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-9
      form-component(
        :tel="tel"
        @hInput="hInput"
      )
</template>

<script>
import FormComponent from './form'
export default {
  components: { FormComponent },
  data: () => ({
    tel: '+8 (999) 888 1234'
  }),
  methods: {
    hInput (value) {
      console.log(value)
      this.tel = value
    }
  }
}
</script>
