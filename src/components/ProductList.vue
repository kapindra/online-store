<template>
  <div class="product-list container">
    <h1>Products</h1>
    <div class="d-flex flex-wrap">
      <product-cart v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart.vue";

export default {
  components: {
    ProductCart,
  },

  computed: {
    products() {
      return this.$store.state.products;      
    }
  },

  mounted() {
    this.$store.dispatch('getProducts');
  }
};
</script>

<style>
</style>