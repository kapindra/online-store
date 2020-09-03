<template>
  <div class="col-3 pb-4">
    <div class="card h-100 text-left">
      <img class="card-img-top" :src="product.image" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name: 'product', params:{id: product.id}}">{{product.title}}</router-link>
        </h4>
        <strong>Rs.{{product.price}}</strong>
        <p class="card-text">{{product.description}}</p>
        <p>
          Created at: {{product.created_at}}
        </p>
        <p>
          Updated at: {{product.updated_at}}
        </p>
        <div>
          <button class="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'product',
  ]
};
</script>

<style>
</style>