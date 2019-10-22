<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-9
      .row
        form-component(
          :firstStudio="firstStudio"
          :isPhoneInput="isPhoneInput"
          @hPhone="hPhone"
          @hEmail="hEmail"
        )
      .row.q-pb-sm
        q-btn.bg-primary.text-white(label="Get data" @click="getStudios" outlined dense no-caps style="width: 50%;")
      .row
        q-btn.bg-grey.text-white(label="Set new data" @click="setStudios" outlined dense no-caps style="width: 50%;")

</template>

<script>
import FormComponent from './form'
export default {
  components: { FormComponent },
  data: () => ({
    relURL: 'cabinet/v1.0/',
    firstStudio: {},
    isPhoneInput: false,
    studioID: 0
  }),
  methods: {
    hPhone (value) {
      this.firstStudio.phone = value
    },
    hEmail (value) {
      this.firstStudio.email = value
    },
    async getStudios () {
      const { data } = await this.$http.get(`${this.relURL}studios/`).then(resp => resp.data)
      this.firstStudio = data.items[0]
      this.studioID = data.items[0].id
      this.isPhoneInput = true
    },
    async setStudios () {
      const result = await this.$http.put(`${this.relURL}studios/${this.studioID}`, this.firstStudio).then(resp => resp.data)
      console.log(result)
    }
  },
  async created () {
    console.log(this.$route)
    console.log(window.location.href)
  }
}
</script>
