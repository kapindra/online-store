<template>
  <div class="product-list container">
    <h1>Products</h1>
    <div class="d-flex flex-wrap">
      <product-cart />
      <product-cart />
      <product-cart />
      <product-cart />
      <product-cart />
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart.vue";

export default {
  components: {
    ProductCart,
  },
};
</script>

<style>
</style>