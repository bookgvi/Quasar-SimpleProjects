<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-9
      form-component(
        :tel="tel"
      )
</template>

<script>
import FormComponent from './form'
export default {
  components: { FormComponent },
  data: () => ({
    tel: '89998881234'
  })
}
</script>
