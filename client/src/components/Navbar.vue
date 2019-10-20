<template>
  <nav>
    <ul class="navbar">
      <div class="nav-item brand">
        <li><router-link tag="h3" :to="{name: 'home'}">BestBuyShop</router-link></li>
      </div>
      <div class="nav-item categories">
        <li v-for="category in categories" :key="category._id">
          <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}">{{ category.title }}</router-link>
        </li>
      </div>
      <div class="nav-item categories">
        <li>
          <router-link tag="a" :to = "{name: 'admin'}" class="cart-color">Admin</router-link>
        </li>
        <li>
          <router-link tag="a" :to = "{name: 'checkout'}">Cart(<span class="cart-color">{{ cart.length }}</span>)</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import Api from '@/config/Api'

export default {
  name: 'navbar',
  data() {
    return {
      categories: []
    }
  },
  created() {
    Api().get('/categories').then(response => {
      this.categories = response.data
    })
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  }
}
</script>

<style scoped>

a:hover, a:active {
  color: #00204A;
  border-bottom: 1px solid #00204A;
}
.router-link-exact-active {
  color: #00204A !important;
}
nav {
  background-color: #ffffff;
  border-bottom: 1px solid #D9FAFF;
  box-shadow: 0 7px 14px rgba(217,250,255,0.40), 0 5px 5px rgba(0,0,0,0.22);
  margin-bottom: 2em;
}
.navbar {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.navbar h3 {
  cursor: pointer;
  margin: 1em;
}
.navbar li {
  padding: 5px;
}
.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
}
.cart-color {
  color: #F73859;
}
</style>
