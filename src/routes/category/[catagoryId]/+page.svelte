<script>
  import { page } from "$app/stores";
  const { catagoryId } = $page.params;
  import { products } from "$lib/products";
  import Card from "$components/Card.svelte";

  const filterProducts = products.filter(product=>(product.category===catagoryId))
</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {#each filterProducts as product}
        <Card {product} />
      {/each}
    </div>
  </div>
</section>
