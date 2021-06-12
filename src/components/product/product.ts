import faker from "faker";

export class ProductObject {
  id!: number;
  name!: string;
  price!: string;
  description!: string;
  img!: string;
  label!: string | null;
}

const imgs = [
  "https://docs.google.com/uc?export=download&id=1PM69ATaTXj-D7qmwiz2iiv_mxGBOqP_w",
  "https://docs.google.com/uc?export=download&id=1DqSDzxYQ1kqM2A_Y6XcZ8wWwyg8FYSXk",
  "https://docs.google.com/uc?export=download&id=1B9kqLd4ykPOzRdCxP5W7ZNwCQ4LXTutY",
  "https://docs.google.com/uc?export=download&id=1S0UlOnTYeZiVGgtZpnhZjb9d4EAHveAU",
  "https://docs.google.com/uc?export=download&id=1rqUQ1bgSWi4bzh20uLnq8WeHptJP7Kzm",
  "https://docs.google.com/uc?export=download&id=124mey7q_o4Jo7FapOLm0mDgIxlpKLSTy",
  "https://docs.google.com/uc?export=download&id=13IaLfew_j5rX3P3rxoAkYcY_7grx_RZh",
  "https://docs.google.com/uc?export=download&id=1TMLPbAXiJ6P1ObmICG-jLVb1dH2w9mlM",
  "https://docs.google.com/uc?export=download&id=1aeWcmP5v_w4NQXdda-kA8k61AXcV_3WG",
  "https://docs.google.com/uc?export=download&id=1lXx8fHeG3mElRsgtXcdzpUDYbYy7eEmo",
].reverse();
export const ALL_PRODUCTS: ProductObject[] = imgs.map((img, i) => {
  var label = null;
  if (i % 5 == 0) label = "New";
  if (i == 0 || i % 10 == 0) label = "Best Seller";
  return {
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(10, 1000, 2),
    description: faker.commerce.productDescription(),
    img: img,
    label: label,
  };
});
