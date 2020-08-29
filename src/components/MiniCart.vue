<template>
  <div class="dropdown-menu p-2 cart-dropdown" aria-labelledby="triggerId">
    <div class="d-flex justify-content-between mb-4">
      <div class="title">
        <strong>Product title</strong>
        <div>1 x $22</div>
      </div>
      <button class="btn btn-primary">Delete</button>
    </div>
    <div class="total d-flex justify-content-between">
      <span>Total: $22</span>
      <a href="#" class>Clear</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cart-dropdown {
  width: 300px;
}
</style>