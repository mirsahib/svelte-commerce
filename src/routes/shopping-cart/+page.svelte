<script lang="ts" >
  import type {ProductType} from "$lib/products"  
  import ProductRow from "$components/ProductRow.svelte";
  // import { products } from "$lib/products";
  import cart from "$store/cart";
  let products:ProductType[] = []

  cart.subscribe(val=>{
    products = val.products
  })

</script>

<div class="w-full overflow-x-auto">
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Image</th>
        <th class="py-2 px-4 border-b">Name</th>
        <th class="py-2 px-4 border-b">Price</th>
        <th class="py-2 px-4 border-b">Quantity</th>
        <th class="py-2 px-4 border-b">Total Price</th>
        <th class="py-2 px-4 border-b" />
      </tr>
    </thead>
    <tbody>
      <!-- Table rows here -->
      {#each products as product}
        <ProductRow {product} />
      {/each}
    </tbody>
  </table>
</div>
