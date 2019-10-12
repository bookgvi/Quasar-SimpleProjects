<template lang="pug">
  .modal.q-pt-md(@keydown.enter="saveChanges")
    .row.q-pb-md.q-pl-md
      .col
        .text-h4 Human # {{ rowData.id }}
      .col-1
        q-icon.cursor-pointer(name="close" @click="$emit('hasModal')" style="font-size: 18px;")
    .changeBlock.q-px-md
      .row.q-pb-md
        .col
          .row
            span Change name
          .row
            .col
              q-input(v-model="firstName" outlined dense)
      .row.q-pb-md
        .col.q-pr-sm
          q-btn.bg-primary.text-white(label="Save" style="width: 100%;" @click="saveChanges")
        .col
          q-btn(label="Cancel" style="width: 100%;" @click="$emit('hasModal')")
</template>

<script>
export default {
  name: 'modalDialog',
  props: {
    rowData: Object
  },
  data: () => ({
    firstName: ''
  }),
  created () {
    this.firstName = this.rowData.firstName
  },
  methods: {
    saveChanges () {
      let changes = {}
      changes.id = this.rowData.id
      changes.firstName = this.firstName
      this.$emit('saveChanges', changes)
      this.$emit('hasModal')
    }
  }
}
</script>

<style scoped>

</style>
