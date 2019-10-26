<template lang="pug">
  .mainPage
    .row
      .col-2
        q-btn.q-ma-none.q-mb-sm(label="Some text 1" style="width: 100%;" @click="hasShow('isShow1')")
        dropdown-menu(:options="options1", :grp="grp1" :isShow="isShow.isShow1")
      .col-2.q-pl-sm
        q-btn.q-ma-none.q-mb-sm(label="Some text 2" style="width: 100%;" @click="hasShow('isShow2')")
        dropdown-menu(:options="options2", :grp="grp2" :isShow="isShow.isShow2")
      .col-2.q-pl-sm
        q-btn.q-ma-none.q-mb-sm(label="Some text 3" style="width: 100%;" @click="hasShow('isShow3')")
        dropdown-menu(:options="options2", :grp="grp2" :isShow="isShow.isShow3")
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
      grp2: ['op2'],
      isShow: {
        isShow1: false,
        isShow2: false,
        isShow3: false
      }
    }
  },
  methods: {
    hasShow (val) {
      for (let key in this.isShow) {
        key !== val ? this.isShow[key] = false : undefined
      }
      this.isShow[val] = !this.isShow[val]
    },
    hideAll () {
      for (let key in this.isShow) {
        this.isShow[key] = false
      }
    }
  },
  created () {
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.hideAll()
      }
    })
  }
}
</script>

<style scoped>

</style>
