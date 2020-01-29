<template>
  <q-layout view="lHh Lpr lFf">
  </q-layout>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  async mounted () {
    console.log(await this.$http.post('https://pre.ugoloc.ucann.ru/api/auth/login', {
      login: 'artem',
      password: '123456'
    }))
  }
}
</script>
