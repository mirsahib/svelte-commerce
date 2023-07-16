import { faker } from "@faker-js/faker";

export type ProductType = {
  id: string;
  img: string;
  alt: string;
  category: string;
  title: string;
  description:string,
  price: string;
};

const populateProducts = () => {
  const products: ProductType[] = [];
  for (let i = 0; i < 10; i++) {
    const product: ProductType = {
      id: faker.string.uuid(),
      img: faker.image.urlLoremFlickr({ category: "fashion" }),
      alt: faker.commerce.productName(),
      category: faker.commerce.department(),
      description:faker.commerce.productDescription(),
      title: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 10000 }),
    };
    products.push(product);
  }
  return products;
};

export const products = populateProducts();
