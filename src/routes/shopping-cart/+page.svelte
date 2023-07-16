<script>
  import { Trash2 } from "lucide-svelte";
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
      <tr>
        <td class="py-2 px-4 border">
          <!-- Added border class here -->
          <img
            src="product-image.jpg"
            alt="Product"
            class="h-10 w-10 rounded-full"
          />
        </td>
        <td class="py-2 px-4 border">
          <!-- Added border class here -->
          Product Name
        </td>
        <td class="py-2 px-4 border">
          <!-- Added border class here -->
          $9.99
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
          <button>
            <Trash2 />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
