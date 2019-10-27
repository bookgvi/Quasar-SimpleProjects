<template lang="pug">
  .row.q-ml-sm {{ showMenu }}
    q-option-group(
      v-model="grpD"
      :options="optionsD"
      type="checkbox"
      :style="[style, { display: display }, { opacity: `${opacity}` }]"
      @input="$emit('change', grpD)"
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
      optionsD: this.options,
      grpD: this.grp,
      show: false,
      click: 0,
      opacity: 0,
      changeOpacity: 0.007,
      display: 'none',
      style: {
        position: 'fixed',
        width: '12%',
        backgroundColor: 'white',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        border: '1px solid silver',
        borderRadius: '3px'
      }
    }
  },
  computed: {
    showMenu: {
      get () {
        this.opacityAnime(this.isShow)
      }
    }
  },
  methods: {
    opacityAnime (isFade) {
      if (isFade) {
        this.changeOpacity = 0.007
        this.opacity = 0
        this.display = 'block'
      } else {
        this.changeOpacity = -this.changeOpacity
        this.opacity = 1
      }
      setTimeout(_ => {
        let timer = setInterval(_ => {
          this.opacity += this.changeOpacity
          if (this.opacity >= 1) {
            clearInterval(timer)
          }
        }, 5)
      }, 0)
    }
  }
}
</script>
