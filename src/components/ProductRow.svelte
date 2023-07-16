<script lang="ts">
  import { Trash2 } from "lucide-svelte";
  import type {ProductType} from "$lib/products"
  import cart from "$store/cart";
  export let product:ProductType

  const handleRemoveProduct = (product:ProductType) => {
    console.log("🚀 ~ file: ProductRow.svelte:8 ~ handleRemoveProduct ~ product:", product)
    cart.removeFromCart(product)
  }

</script>

<!-- Table rows here -->
<tr>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    <img src={product.img} alt="Product" class="h-10 w-10 rounded-full" />
  </td>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    {product.title}
  </td>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    ${product.price}
  </td>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    2
  </td>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    $19.98
  </td>
  <td class="py-2 px-4 border">
    <!-- Added border class here -->
    <button on:click={()=>handleRemoveProduct(product)}>
      <Trash2 />
    </button>
  </td>
</tr>
