<template lang="pug">
  .mainPage
    .row
      .col-2
        q-btn.q-ma-none.q-mb-xs(label="Some text 1" style="width: 100%;" @click="hasShow('isShow1')")
        dropdown-menu(:options="options1", :grp="grp1" :isShow="isShow.isShow1" @change="change")
      .col-2.q-pl-sm
        q-btn.q-ma-none.q-mb-xs(label="Some text 2" style="width: 100%;" @click="hasShow('isShow2')")
        dropdown-menu(:options="options2", :grp="grp2" :isShow="isShow.isShow2" @change="change")
      .col-2.q-pl-sm
        q-btn.q-ma-none.q-mb-xs(label="Some text 3" style="width: 100%;" @click="hasShow('isShow3')")
        dropdown-menu(:options="options3", :grp="grp3" :isShow="isShow.isShow3" @change="change")
</template>

<script>
import DropdownMenu from './dropdownMenu'
export default {
  name: 'index',
  components: { DropdownMenu },
  data () {
    return {
      grp1: ['op1'],
      options1: [
        { label: 'First', value: 1},
        { label: 'Second', value: 2},
        { label: 'Third', value: 3}
      ],
      grp2: ['op1'],
      options2: [
        { label: 'Fourth', value: 4},
        { label: 'Fifth', value: 5},
        { label: 'Six', value: 6}
      ],
      grp3: ['op2'],
      options3: [
        { label: 'Seven', value: 7},
        { label: 'Eight', value: 8},
        { label: 'Nine', value: 9}
      ],
      isShow: {
        isShow1: false,
        isShow2: false,
        isShow3: false
      }
    }
  },
  methods: {
    change (value) {
      console.log(value)
    },
    hasShow (val) {
      for (let key in this.isShow) {
        key !== val ? this.isShow[key] = false : this.isShow[val] = !this.isShow[val]
      }
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
