import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type {ProductType } from "$lib/products";

type cartType = {
  products: ProductType[];
  count: number;
  totalPrice: number;
};
const initialCart: cartType = {
  products: [],
  count: 0,
  totalPrice: 0,
};
const { subscribe, set, update } = writable<cartType>(initialCart);

const addToCart = (product: ProductType) => {
  update(cart=>{
    console.log("🚀 ~ file: cart.svelte:5 ~ update ~ cart:", cart)

    const newProduct = [...cart.products,product]
    const newcount = cart.count+1
    const newPrice = cart.totalPrice+Number(product.price)
    return {
        ...cart,
        products:newProduct,
        count:newcount,
        totalPrice:newPrice
    }
  })
};
const removeFromCart = (product:ProductType)=>{
  update(cart=>{
    const productIndex = cart.products.findIndex(item=>item.id===product.id)
    if(productIndex!==-1){
      const newProduct = [...cart.products]
      newProduct.splice(productIndex,1)
      const newCount = cart.count-1
      const newPrice = cart.totalPrice-Number(product.price)
      return {
        ...cart,
        products:newProduct,
        count:newCount,
        totalPrice:newPrice
      }
    }
    return cart
  })
}

export default {
  addToCart,
  removeFromCart,
  subscribe
};
