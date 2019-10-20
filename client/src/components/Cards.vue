<template>
  <div class="container">
    <div class="card-list" v-for="product in products" :key="product._id">
        <Card :product="product" />
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  props: ['products'],
  components: {
    Card
  }
}
</script>

<style scoped>
.container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>