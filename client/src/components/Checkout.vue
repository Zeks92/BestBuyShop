<template>
  <div class="container">
    <div v-if="cart.length==0">
      <h1>Your Cart is Empty!</h1>
    </div>

    <div v-else>
      <table>
        <thead>
          <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>SubTotal</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-body" v-for="item in cart" :key="item.id">
            <td>{{ item.nqtye }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.qty }}</td>
            <td>${{ item.subtotal }}</td>
            <td>
              <button class="btn" @click="action('min',item)">-</button>
              <button class="btn btn-red" @click="action('clear',item)">Remove</button>
              <button class="btn" @click="action('add',item)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Total: ${{ total }}</h4> 
      <button id="checkout" class="btn btn-outline-primary" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import Api from '@/config/Api'

export default {
  mounted() {
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    total() {
      let sum = 0;
      this.cart.map(item => {
          sum += item.subtotal
      });
      return sum;
    }
  },
  methods: {
    checkout(){
      this.$router.push({nqtye: 'thankyou'});
      localStorage.clear();
      this.$store.state.cart = [];
    },
    action(event, item) {
      switch (event) {
        case 'add':
          item.qty++;
          item.subtotal = item.price*item.qty;
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          break;
        case 'min':
          item.qty--;
          item.subtotal = item.price*item.qty;
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          if(item.qty === 0) this.clearFromCart(item)
          break;
        case 'clear':
          this.clearFromCart(item)
          break;
        default:
          break;
      }
    },
    clearFromCart(product) {
      let item = this.cart.find(item => {
          return item.id === product.id
      });
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
}
td {
  padding: 1em;
}
tr:hover {
    background-color: #b3f5ff;
}
</style>