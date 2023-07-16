<script>
  import { products } from "$lib/products";
  import Card from "$components/Card.svelte";
</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {#each products as product}
        <Card {product} />
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
