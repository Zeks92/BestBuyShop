<template>
  <div>
    <div v-for="product in products" :key="product._id">
        <ProductListItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductListItem from '@/components/admin/ProductListItem'

export default {
  props: ['products'],
  components: {
    ProductListItem
  }
}
</script>