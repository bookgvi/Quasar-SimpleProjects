<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-page-container
      TopMenu
      .row.justify-center
        .col-9
          router-view
</template>

<script>
import TopMenu from '../components/menu'
export default {
  components: { TopMenu }
}
</script>
