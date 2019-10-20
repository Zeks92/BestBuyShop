<template>
  <div id="admin">
    <div class="admin-options">
      <button class="btn" @click="newProduct = true">Add Product</button>
      <button class="btn" @click="newProduct = false">View Products</button>
    </div>
    <div class="admin-list">
      <template v-if="newProduct == true">
        <NewProduct></NewProduct>
      </template>
      <template v-else>
        <ProductList :products="products"/>
      </template>
    </div>
  </div>
</template>

<script>
import Api from '@/config/Api'
import NewProduct from '@/components/admin/NewProduct'
import ProductList from '@/components/admin/ProductList'

export default {
  components: {
    NewProduct,
    ProductList
  },
  data () {
    return {
      newProduct: false,
      products: []
    }
  },
  created() {
    Api().get('/products/all').then(response => {
      this.products = response.data
    })
  }
}
</script>

<style scoped>

.admin-options {
  min-width: 300px;
  display: flex;
  justify-content: center;
}
.admin-options .btn {
  padding: 1em;
  margin: 1em;
}
</style>
