<template lang="pug">
  .mainPage
    .row
      .col-2
        q-btn.q-ma-none.q-mb-sm(label="Some text 1" style="width: 100%;")
        dropdown-menu(:options="options1", :grp="grp1")
      .col-2.q-pl-sm
        q-btn.q-ma-none.q-mb-sm(label="Some text 2" style="width: 100%;")
        dropdown-menu(:options="options2", :grp="grp2")
</template>

<script>
import DropdownMenu from './dropdownMenu'
export default {
  name: 'index',
  components: { DropdownMenu },
  data () {
    return {
      options1: [
        { label: 'First', value: 'first'},
        { label: 'Second', value: 'second'},
        { label: 'Third', value: 'third'}
      ],
      grp1: ['op1'],
      options2: [
        { label: 'Fourth', value: 'fourth'},
        { label: 'Fifth', value: 'fifth'},
        { label: 'Six', value: 'six'}
      ],
      grp2: ['op2']
    }
  }
}
</script>

<style scoped>

</style>
