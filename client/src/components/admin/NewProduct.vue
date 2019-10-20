<template>
  <ProductForm @save-product="addProduct" :product="product"></ProductForm>
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
  },
  methods: {
    addProduct (product) {
      Api().post('/products/', product,
        {
          headers: {'Content-type': 'application/json'}
        }).then(response => {
          this.$router.push(`/product/${response.data._id}`)
      })
    }
  }
}
</script>