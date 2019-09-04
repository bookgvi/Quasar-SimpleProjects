<template>
  <div class="flex-center q-pa-lg text-center row">
    <q-markup-table separator="horizontal" class="col-6">
      <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <q-btn outline color="grey" label="Edit" @click="hEdit(item)" class="q-pa-xs" />
        </td>
      </tr>
      </tbody>
    </q-markup-table>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'editProduct'
    ]),
    hEdit (item) {
      this.editProduct(item)
      this.$router.push(`/edit/${item.id}`, () => {})
    }
  }
}
</script>

<style>
</style>
