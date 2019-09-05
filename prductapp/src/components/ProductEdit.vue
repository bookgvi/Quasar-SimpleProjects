<template>
  <q-card class="q-mx-lg">
    <q-card-section>
      <edit-fields label="ID" :isBlocked="editingProduct.isDisable" :val="editingProduct.id"/>
      <edit-fields label="NAME" :isBlocked="editingProduct.isDisable" :val="editingProduct.name"/>
      <edit-fields label="PRICE" :isBlocked="editingProduct.isDisable" :val="editingProduct.price"/>
      <q-btn color="primary" label="Save" @click="saveChanges" class="q-my-sm"/>
      <q-btn color="primary" label="Cancel" @click="cancel" class="q-mx-sm"/>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EditFields from './EditFields'
export default {
  components: {
    EditFields
  },
  data: () => ({
    isNew: false
  }),
  computed: {
    ...mapGetters([
      'editingProduct'
    ])
  },
  created () {
    console.dir(this.$route)
  },
  methods: {
    ...mapActions([
      'clearProductFields',
      'addNew',
      'modifyThis'
    ]),
    saveChanges () {
      this.modifyThis()
      this.clearProductFields()
      this.$router.replace({ name: 'prodView' })
    },
    cancel () {
      this.clearProductFields()
      this.$router.replace({ name: 'prodView' })
    }
  }
}
</script>

<style>
</style>
