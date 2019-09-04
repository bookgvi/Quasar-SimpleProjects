<template>
  <div class="q-pa-md">
    <q-markup-table>
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
          <q-btn color="primary" label="Edit" @click="hClick(item.id)" />
        </td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isBlocked: true
    }
  },
  computed: {
    ...mapGetters([
      'products'
    ])
  },
  methods: {
    hClick (id) {
      this.isBlocked = false
    }
  }
}
</script>

<style>
</style>
