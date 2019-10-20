<template>
<div>
  <ProductForm @save-product="updateProduct" :product="product"></ProductForm>
  <button @click="deleteProduct" class="btn btn-red container">Delete Product</button>
</div>
</template>

<script>
import Api from '@/config/Api'
import ProductForm from '@/components/admin/ProductForm'

export default {
  components: {
    ProductForm
  },
  data () {
    return {
      product: {}
    }
  },
  created () {
    Api().get(`/products/${this.$route.params.id}`)
    .then(response => {
      this.product = response.data
    });
  },
  methods: {
    updateProduct (product) {
      Api().put(`/products/${this.product._id}`, product,
        {
          headers: {'Content-type': 'application/json'}
        }).then(response => {
          this.$router.push(`/product/${response.data._id}`)
      })
    },
    deleteProduct () {
      Api().delete(`/products/${this.product._id}`)
      .then(response => {
        this.$router.push('/')
      })
    }
  }
}
</script>
