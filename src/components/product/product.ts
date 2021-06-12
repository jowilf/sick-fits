// import { commerce } from "faker";

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
export const ALL_PRODUCTS: ProductObject[] =
  /* imgs.map((img, i) => {
  var label = null;
  if (i % 5 == 0) label = "New";
  if (i == 0 || i % 10 == 0) label = "Best Seller";
  return {
    id: i,
    name: commerce.productName(),
    price: commerce.price(10, 1000, 2),
    description: commerce.productDescription(),
    img: img,
    label: label,
  };
});
 */
  [
    {
      id: 0,
      name: "Unbranded Granite Hat",
      price: "950.00",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      img: "https://docs.google.com/uc?export=download&id=1lXx8fHeG3mElRsgtXcdzpUDYbYy7eEmo",
      label: "Best Seller",
    },
    {
      id: 1,
      name: "Incredible Concrete Sausages",
      price: "523.00",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      img: "https://docs.google.com/uc?export=download&id=1aeWcmP5v_w4NQXdda-kA8k61AXcV_3WG",
      label: null,
    },
    {
      id: 2,
      name: "Handcrafted Wooden Cheese",
      price: "950.00",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      img: "https://docs.google.com/uc?export=download&id=1TMLPbAXiJ6P1ObmICG-jLVb1dH2w9mlM",
      label: null,
    },
    {
      id: 3,
      name: "Rustic Rubber Table",
      price: "790.00",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      img: "https://docs.google.com/uc?export=download&id=13IaLfew_j5rX3P3rxoAkYcY_7grx_RZh",
      label: null,
    },
    {
      id: 4,
      name: "Refined Metal Ball",
      price: "348.00",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      img: "https://docs.google.com/uc?export=download&id=124mey7q_o4Jo7FapOLm0mDgIxlpKLSTy",
      label: null,
    },
    {
      id: 5,
      name: "Sleek Wooden Shirt",
      price: "672.00",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      img: "https://docs.google.com/uc?export=download&id=1rqUQ1bgSWi4bzh20uLnq8WeHptJP7Kzm",
      label: "New",
    },
    {
      id: 6,
      name: "Licensed Granite Cheese",
      price: "908.00",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      img: "https://docs.google.com/uc?export=download&id=1S0UlOnTYeZiVGgtZpnhZjb9d4EAHveAU",
      label: null,
    },
    {
      id: 7,
      name: "Ergonomic Rubber Ball",
      price: "387.00",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      img: "https://docs.google.com/uc?export=download&id=1B9kqLd4ykPOzRdCxP5W7ZNwCQ4LXTutY",
      label: null,
    },
    {
      id: 8,
      name: "Incredible Steel Soap",
      price: "328.00",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      img: "https://docs.google.com/uc?export=download&id=1DqSDzxYQ1kqM2A_Y6XcZ8wWwyg8FYSXk",
      label: null,
    },
    {
      id: 9,
      name: "Handcrafted Plastic Salad",
      price: "181.00",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      img: "https://docs.google.com/uc?export=download&id=1PM69ATaTXj-D7qmwiz2iiv_mxGBOqP_w",
      label: null,
    },
  ];
