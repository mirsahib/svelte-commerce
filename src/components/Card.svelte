<script lang="ts">
  import type {ProductType} from "$lib/products"
  import cart from "$store/cart"
  export let product:ProductType
  const handleAddToCart = (product:ProductType) => {
    console.log("🚀 ~ file: Card.svelte:5 ~ handleAddToCart ~ product:", product)
    cart.addToCart(product)
  }
</script>

<div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a href={`/category/${product.category}/product/${product.id}`} class="block relative h-48 rounded overflow-hidden">
      <img
        alt={product.alt}
        class="object-cover object-center w-full h-full block"
        src={product.img}
      />
    </a>
    <div class="mt-4">
      <a href="/category/{product.category}" class="text-gray-500 text-xs tracking-widest title-font mb-1 hover:underline">
        {product.category}
      </a>
      <h2 class="text-gray-900 title-font text-lg font-medium">
        {product.title}
      </h2>
      <div class="flex justify-between items-end">
        <p class="mt-1">${product.price}</p>
        <button
        on:click={()=>handleAddToCart(product)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>