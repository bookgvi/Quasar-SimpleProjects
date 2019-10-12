<template lang="pug">
  q-tr
    q-td(
      v-for="({ active, name, __tdClass }, index) in cols"
      :key="index"
      @click.native="modalDialog(row)"
      :class="[active ? activeX : '', __tdClass]"
    )
      template(v-if="name === 'id'")
        span {{ row.id }}
      template(v-if="name === 'firstName'")
        span {{ row.firstName }}
</template>

<script>
export default {
  name: 'tableRow',
  props: {
    row: Object,
    cols: Array
  },
  data: () => ({
    activeX: 'active'
  }),
  methods: {
    modalDialog (rowData) {
      this.$emit('rowDialog', rowData)
    }
  }
}
</script>

<style scoped>
  .active {
    cursor: pointer;
  }
</style>
