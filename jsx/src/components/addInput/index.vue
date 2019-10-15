<script>
export default {
  name: 'index',
  data: () => ({
    inputCount: -1,
    input1: 'QQQ'
  }),
  render (createElement) {
    const wrap = createElement('div', {
      class: {
        row: true,
        'no-wrap': true,
        'q-mt-xl': true,
        'q-ml-xl': true
      }
    },
    [
      createElement('div', {
        class: {
          'inputBlock': true,
          'col-4': true,
          'q-pr-md': true
        }
      },
      [
        createElement('q-input', {
          attrs: {
            value: this.input1
          },
          class: {
            'q-field--outlined': true,
            'q-field--dense': true
          },
          on: {
            input: this.inputChange
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
          class: {
            'bg-grey': true,
            'text-white': true
          },
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
      const inputBlock = document.querySelector('.inputBlock')
      const newInput = document.createElement('input')
      const appendInput = inputBlock.appendChild(newInput)
      this.inputCount++
      appendInput.dataset.number = this.inputCount
      appendInput.style.width = '100%'
      appendInput.style.height = '2.5rem'
      appendInput.classList.add('q-mt-md')
      appendInput.oninput = this.input
    },
    inputChange (value) {
      this.input1 = value
    },
    input (value) {
      console.log(value)
    }
  }
}
</script>
