<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-page-container
      TopMenu
      router-view
</template>

<script>
import TopMenu from '../components/menu'
export default {
  components: { TopMenu }
}
</script>
