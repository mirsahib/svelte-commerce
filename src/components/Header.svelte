<script lang="ts">
  import { goto } from "$app/navigation";
  import { ShoppingCart } from "lucide-svelte";
  import cart from "$store/cart"
  const gotoShoppingCart = () => {
    goto('/shopping-cart')
  };
  let count:number 
  cart.subscribe((value)=>{
    count= value.count
  })

</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a
      href="/"
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span class="ml-3 text-xl">SvelteCommerce</span>
    </a>

    <button
      class="md:ml-auto inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      on:click={gotoShoppingCart}
      >Cart
      <ShoppingCart size={15} class="ml-3" />
      <span class="mx-2">item:</span>
      {count}
    </button>
  </div>
</header>
