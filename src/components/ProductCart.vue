<template>
  <div class="col-3 pb-4">
    <div class="card h-100 text-left">
      <img class="card-img-top" src="https://via.placeholder.com/150" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name: 'product', params:{id: 23}}">Product Title</router-link>
        </h4>
        <strong>$24</strong>
        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div>
          <button class="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>