<template>
  <div>
    <Cards :products="products"/>
    <div class="pagination">
      <button class="btn" @click="checkPage(prevUrl)" :disabled="currentPage == 0"><i class="fas fa-arrow-left fa-2x"></i></button>
      <p>{{currentPage+1 }} / {{ pages }}</p>
      <button class="btn" @click="checkPage(nextUrl)" :disabled="currentPage == pages-1"><i class="fas fa-arrow-right fa-2x"></i></button>
    </div>
  </div>
</template>

<script>
import Cards from './Cards'
import Api from '@/config/Api'

export default {
  components: {
    Cards
  },
  data() {
    return {
      products: [],
      currentPage: '',
      pages: '',
      prevUrl: '',
      nextUrl: ''
    }
  },
  created() {
    Api().get('/products').then(response => {
      this.products = response.data.products
      this.currentPage = response.data.currentPage
      this.pages = response.data.pages
      this.nextUrl = response.data.nextUrl
      this.prevUrl = response.data.prevUrl
    })
  },
  methods: {
    checkPage(url) {
      Api().get(url).then(response => {
        this.products = response.data.products
        this.currentPage = response.data.currentPage
        this.pages = response.data.pages
        this.nextUrl = response.data.nextUrl
        this.prevUrl = response.data.prevUrl
      })
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
