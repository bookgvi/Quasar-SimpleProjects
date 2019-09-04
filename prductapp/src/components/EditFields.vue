<template>
  <div>
    <q-input
      :label="label"
      :dense="dense"
      :disable="isBlocked"
    />
  </div>
</template>

<script>
export default {
  props: ['label'],
  data: () => ({
    dense: false,
    isBlocked: true
  })
}
</script>

<style>
</style>
