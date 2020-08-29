<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="/product" class="nav-item nav-link">Product</router-link>
        </div>
        <div class="dropdown open">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >0 Cart</button>
          <div @click="$event.stopPropagation()">
            <mini-cart />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";

export default {
  components: {
    MiniCart,
  },
};
</script>

<style>
</style>