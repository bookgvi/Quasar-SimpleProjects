<template lang="pug">
  q-page
    .row.justify-center.q-py-lg
      .col-10
        main-page
</template>

<script>
import mainPage from '../components/mainPage'
export default {
  name: 'PageIndex',
  components: { mainPage }
}
</script>
