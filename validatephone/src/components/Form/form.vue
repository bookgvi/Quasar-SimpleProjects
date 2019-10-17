<template lang="pug">
  .form
    .row.q-pb-md
      q-input(
        v-if="isPhoneInput"
        :value="reformatPhoneNumber(firstStudio.phone) | phoneFormat"
        @change.native="hInput"
        placeholder="+7 (900) 800 1234"
        outlined
        dense
      )
</template>

<script>
export default {
  props: {
    isPhoneInput: Boolean,
    firstStudio: Object
  },
  filters: {
    phoneFormat (phone) {
      const formatPhone = phone.replace(/(^.)?(\d..?)(\d..?)?(\d...?)(.*)/, '+$1 ($2) $3 $4')
      return formatPhone
    }
  },
  methods: {
    hInput (e) {
      let value = e.target.value
      value = this.reformatPhoneNumber(value)
      this.$emit('hInput', value)
    },
    reformatPhoneNumber (phone) {
      return String(phone.split('').filter(item => !isNaN(item) && item !== ' ').join(''))
    }
  }
}
</script>
