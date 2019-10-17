<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-9
      .row
        form-component(
          :firstStudio="firstStudio"
          :isPhoneInput="isPhoneInput"
          @hInput="hInput"
        )
      .row
        q-btn(label="Studios" @click="getStudios" outlined dense)

</template>

<script>
import FormComponent from './form'
export default {
  components: { FormComponent },
  data: () => ({
    firstStudio: {},
    isPhoneInput: false
  }),
  methods: {
    hInput (value) {
      console.log(value)
      this.tel = value
    },
    async getStudios () {
      const relURL = 'cabinet/v1.0/'
      const { items } = await this.$http({ url: relURL + 'studios', method: 'GET' }).then(resp => resp.data.data)
      this.firstStudio = items[0]
      this.isPhoneInput = true
    }
  },
  async created () {
  }
}
</script>
