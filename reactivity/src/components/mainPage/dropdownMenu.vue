<template lang="pug">
  .row.q-ml-sm
    q-option-group(
      v-model="grp"
      :options="options"
      type="checkbox"
      style="border: 1px solid silver; width: 100%;"
    )
</template>

<script>
export default {
  name: 'dropdownMenu',
  props: {
    options: Array,
    grp: Array
  }
}
</script>

<style scoped>

</style>
