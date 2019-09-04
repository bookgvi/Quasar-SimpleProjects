<template>
  <div class="flex flex-center">
    <div class="row">
      <div class="col-12 q-ma-lg">
        <edit-fields label="ID" :isBlocked="editingProduct.isDisable" :val="editingProduct.id"/>
        <edit-fields label="NAME" :isBlocked="editingProduct.isDisable" :val="editingProduct.name"/>
        <edit-fields label="PRICE" :isBlocked="editingProduct.isDisable" :val="editingProduct.price"/>
        <q-btn color="primary" label="Save" @click="saveChanges" class="q-my-sm"/>
        <q-btn color="primary" label="Cancel" @click="cancel" class="q-mx-sm"/>
      </div>
    </div>
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
      this.$router.replace('/')
    },
    cancel () {
      this.clearProductFields()
      this.$router.replace('/')
    }
  }
}
</script>

<style>
</style>
