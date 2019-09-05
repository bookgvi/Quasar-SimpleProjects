<template>
  <div class="row q-gutter-lg flex-center">
    <q-card class="col-4 text-center">
      <q-card-section>
        <slot name="slot1">
          <h4> This is the slot1!!!</h4>
          {{ value.first }}
        </slot>
      </q-card-section>
    </q-card>
    <q-card class="col-4 text-center">
        <q-card-section>
          <slot name="slot2" :val="value">
            <h4> This is the slot2!!!</h4>
            {{ value.second }}
          </slot>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      value: {
        first: 'This value is property of SLOT1.VUE',
        second: 'This is another property of SLOT1.VUE'
      }
    }
  }
}
</script>

<style>
</style>
