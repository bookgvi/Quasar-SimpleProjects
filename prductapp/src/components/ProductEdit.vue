<template>
  <div>
    <edit-fields label="ID" :isBlocked="editingProduct.isDisable" :val="editingProduct.id" @editValue="getNewVal"/>
    <edit-fields label="NAME" :isBlocked="editingProduct.isDisable" :val="editingProduct.name" @editValue="getNewVal"/>
    <edit-fields label="PRICE" :isBlocked="editingProduct.isDisable" :val="editingProduct.price" @editValue="getNewVal"/>
    <q-btn color="primary" label="Save" @click="saveChanges" />
    <q-btn color="primary" label="Cancel" @click="clearProductFields" />
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
    isNew: false,
    newProduct: {
      id: '',
      name: '',
      price: ''
    }
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
    getNewVal (e) {
      this.newProduct[e.label] = e.val
    },
    saveChanges () {
      this.modifyThis()
      this.clearProductFields()
    }
  }
}
</script>

<style>
</style>
