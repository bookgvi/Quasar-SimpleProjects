<template lang="pug">
  .form
    .row.q-pb-md
      .col
        q-input(
          v-if="!isPhoneInput"
          style="width: 150%;"
          placeholder="+7 (900) 800 1234"
          outlined
          dense
        )
        q-input(
          v-if="isPhoneInput"
          :value="reformatPhoneNumber(firstStudio.phone) | phoneFormat"
          @change.native="hPhone"
          placeholder="+7 (900) 800 1234"
          style="width: 150%;"
          outlined
          dense
        )
    .row.q-pb-md
      .col
        q-input(
          :value="firstStudio.email"
          @change.native="hEmail"
          placeholder="email@domain.com"
          style="width: 150%;"
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
    hPhone (e) {
      let value = e.target.value
      value = this.reformatPhoneNumber(value)
      this.$emit('hPhone', value)
    },
    hEmail (e) {
      const value = e.target.value
      this.$emit('hEmail', value)
    },
    reformatPhoneNumber (phone) {
      return String(phone.split('').filter(item => !isNaN(item) && item !== ' ').join(''))
    }
  }
}
</script>
