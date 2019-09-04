<template>
  <div class="q-pt-sm">
    <edit-fields label="ID" :isBlocked="editingProduct.isDisable" :val="editingProduct.id"/>
    <edit-fields label="NAME" :isBlocked="editingProduct.isDisable" :val="editingProduct.name"/>
    <edit-fields label="PRICE" :isBlocked="editingProduct.isDisable" :val="editingProduct.price"/>
    <q-btn color="primary" label="Save" @click="saveChanges" class="q-my-sm"/>
    <q-btn color="primary" label="Cancel" @click="clearProductFields" class="q-mx-sm"/>
  </div>
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
  methods: {
    ...mapActions([
      'clearProductFields',
      'addNew',
      'modifyThis'
    ]),
    saveChanges () {
      this.modifyThis()
      this.clearProductFields()
    }
  }
}
</script>

<style>
</style>
