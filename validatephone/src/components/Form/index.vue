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
        q-btn.bg-primary.text-white(label="Get phone number" @click="getStudios" outlined dense no-caps style="width: 50%;")

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
      const { items } = await this.$http.get(`${relURL}studios`).then(resp => resp.data.data)
      this.firstStudio = items[0]
      this.isPhoneInput = true
    }
  },
  async created () {
  }
}
</script>
