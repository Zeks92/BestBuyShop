<template>
  <div class="list-item">
    <router-link :to="{name: 'product', params: {id: product._id}}">
      <h3>{{ product.name }}</h3>
    </router-link>
    <p>${{ product.price }}</p>
    <router-link tag="button" class="btn btn-red" :to="{name: 'editProduct', params: {id: product._id}}">Edit</router-link>
  </div>
</template>

<script>
import Api from '@/config/Api'

export default {
  props: ['product'],
}
</script>

<style scoped>
.list-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #b3f5ff;
  margin-bottom: 1em;
  box-shadow: 0 7px 14px rgba(217,250,255,0.40), 0 5px 5px rgba(0,0,0,0.22);
  border-radius:5px;
  font-weight:bold;
}
</style>
