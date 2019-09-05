<template>
  <div>
    <slot1>
      <template #slot1 class="">Hello 1</template>

      <template v-slot:slot2="{ val }" class="">
        <q-checkbox v-model="checked" />
        <span v-if="checked" :key="1">{{ variable }}</span>
        <span>{{ val.second }}</span>
      </template>
    </slot1>
  </div>
</template>

<script>
import slot1 from './slotsChildren/slot1'
export default {
  name: 'slotParent',
  components: {
    slot1
  },
  data: () => ({
    checked: true,
    variable: 'var from Parent'
  })
}
</script>

<style scoped>

</style>
