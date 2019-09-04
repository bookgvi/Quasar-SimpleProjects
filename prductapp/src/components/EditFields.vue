<template>
  <div>
    <q-input clearable
      :label="label"
      :disable="isBlocked"
      v-model="editField"
      :mask="vMask"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    label: String,
    isBlocked: Boolean,
    val: [String, Number]
  },
  data () {
    return {
      dense: false
    }
  },
  computed: {
    editField: {
      get () {
        return this.val
      },
      set (e) {
        this.setValue({ label: this.label.toLowerCase(), val: e })
      }
    },
    vMask () {
      let mask
      if (this.label === 'ID') {
        mask = '####'
      } else if (this.label === 'PRICE') {
        mask = '#########'
      } else {
        mask = 'NNNNNNNNNNNNNNNNNNNNNN'
      }
      return mask
    }
  },
  methods: {
    ...mapActions([
      'setValue'
    ])
  }
}
</script>

<style>
</style>
