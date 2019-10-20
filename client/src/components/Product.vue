<template>
  <div class="container">
    <div class="product-img">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <router-link :to="{name: 'category', params: {category: product.category}}">
        <h5>{{ product.category }}</h5>
      </router-link>
      <h4>${{product.price}}</h4>
      <p>
        {{ product.description }}
      </p>
      <button class="btn btn-outline-primary mb-5" @click="addToCart(product)">Add to Cart</button>
      <router-link :to="{name: 'editProduct', params: {id: this.id}}">Edit</router-link>
    </div>
  </div>
</template>

<script>
import Api from '@/config/Api'
import mixins from '@/mixins/mixins'
export default {
  props: ['id'],
  mixins: [mixins],
  data(){
    return {
      product: {}
    }
  },
  created() {
    Api().get(`/products/${this.id}`)
    .then(response => {
      this.product = response.data
    });
  },
  methods: {
    checkout(e) {
      e.preventDefault();
      this.$router.push({ name: 'checkout' });
      console.log(e);
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
h5 {
  margin: 0;
}
img {
  width: 100%;
}
.container {
  max-width: 80vw;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media(min-width: 900px) {
  .product-info {
    width: 45%;
  }
  .product-img {
    width: 45%;
  }
}
</style>