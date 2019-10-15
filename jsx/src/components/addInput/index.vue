<script>
export default {
  name: 'index',
  data: () => ({
    input1: 'QQQ'
  }),
  render (createElement) {
    const wrap = createElement('div', {
      class: {
        row: true,
        'no-wrap': true
      }
    },
    [
      createElement('div', {
        class: {
          'inline-block': true,
          'col-4': true
        }
      },
      [
        createElement('q-input', {
          value: this.input1,
          class: {
            'q-field--outlined': true,
            'q-field--dense': true,
            'q-pr-md': true
          },
          on: {
            change: this.inputChange
          }
        })
      ]),
      createElement('div', {
        class: {
          'col-4': true
        }
      },
      [
        createElement('q-btn', {
          on: {
            click: this.addInput
          }
        }, 'Click me')
      ])
    ])
    return createElement('div', [wrap])
  },
  methods: {
    addInput () {
      console.log('btn clicked!')
    },
    inputChange (value) {
      console.log('Inside inputChange method', value)
    }
  }
}
</script>
