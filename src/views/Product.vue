<template>
  <div class="row mt-5">
    <div class="col-4">
      <img class="card-img-top" src="https://via.placeholder.com/150" alt />
    </div>
    <div class="col-8 text-left">
      <h1> Product {{id}} </h1>
      <h3>$34</h3>
      <input type="text" class="col-1 mr-2 p-1">
      <button class="btn btn-primary">Add to Cart</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex laboriosam atque nesciunt consectetur? Assumenda vero maiores dignissimos, sapiente voluptatem necessitatibus blanditiis et sint aut aliquid inventore alias vitae corporis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id']

}
</script>

<style>

</style>