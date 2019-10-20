<template>
  <form @submit.prevent="saveProduct" id="product-form">
    <div class="form-col">
    <input
      type="text"
      class="form-item"
      placeholder="Name"
      v-model="product.name"
      name="name"
    />
    <textarea
      type="text"
      class="form-item"
      placeholder="Description"
      v-model="product.description"
      name="description"
    />

    <input
      type="text"
      class="form-item"
      placeholder="Category"
      v-model="product.category"
      name="category"
    />
    </div>

    <div class="form-col">
    <input
      type="number"
      class="form-item"
      placeholder="Price"
      v-model.number="product.price"
      name="price"
    />
    <input
      type="text"
      class="form-item"
      placeholder="Add image link"
      v-model="product.image"
      name="image"
    /> 
    <button class="btn form-item">
      <span>Add Product</span>
    </button>
    </div>
  </form>
</template>

<script>
import Api from '@/config/Api'

export default {
  props: ['product'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    saveProduct () {
      //validate.the() => {}
      this.$emit('save-product', this.product)
    }
  }
}
</script>

<style scoped>
#product-form {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
.form-col {
  width: 40%;
}
.form-item {
  width: 70%;
  margin: 1em;
  padding: 1em;
}

</style>