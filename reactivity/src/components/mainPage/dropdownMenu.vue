<template lang="pug">
  .row.q-ml-sm
    q-option-group(
      v-model="grp"
      :options="options"
      type="checkbox"
      :style="[style, { display: showMenu }]"
    )
</template>

<script>
export default {
  name: 'dropdownMenu',
  props: {
    options: Array,
    grp: Array,
    isShow: Boolean
  },
  data () {
    return {
      show: false,
      click: 0,
      style: {
        border: '1px solid silver',
        width: '100%',
      }
    }
  },
  computed: {
    showMenu: {
      get () {
        return this.isShow ? 'block' : 'none'
      }
    }
  }
}
</script>
