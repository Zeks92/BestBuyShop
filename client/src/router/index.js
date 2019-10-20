import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Product from '@/components/Product'
import Category from '@/components/Category'
import Checkout from '@/components/Checkout'
import Thankyou from '@/components/Thankyou'

import Admin from '@/components/admin/Admin'
import NewProduct from '@/components/admin/NewProduct'
import EditProduct from '@/components/admin/EditProduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/category/:category',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: Thankyou
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/new',
      name: 'newProduct',
      component: NewProduct
    },
    {
      path: '/edit/:id',
      name: 'editProduct',
      component: EditProduct
    }
  ]
})
