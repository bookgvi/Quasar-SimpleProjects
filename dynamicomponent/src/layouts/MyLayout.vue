<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-page-container.q-pt-md
      TopMenu
      .row.q-pt-md.justify-between
        .com-9.q-px-xl
          router-view
</template>

<script>
import TopMenu from '../components/menu'
export default {
  components: { TopMenu }
}
</script>
