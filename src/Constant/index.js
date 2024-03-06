import { heroSlider1, heroSlider2, heroSlider3 } from "../assets";
import { facebook, instargram } from "../assets";
import { service1, service2, service3, service4 } from "../assets";
import { ring, bracelet, chain } from "../assets";
import { sample1, sample2, sample3 } from "../assets";

// Links and other informations
const facebookLink = "https://www.facebook.com/";
const instargramLink = "https://www.instagram.com/";

const contactNumber = "075 706 0941";
const email = "client@gmail.com";
const address = "Ampara";

export const heroSlide = [
  {
    id: "slider 1",
    img: heroSlider1,
  },
  {
    id: "slider 2",
    img: heroSlider2,
  },
  {
    id: "slider 3",
    img: heroSlider3,
  },
];

export const socialMedia = [
  {
    id: "instagram",
    link: instargramLink,
    img: instargram,
  },
  {
    id: "facebook",
    link: facebookLink,
    img: facebook,
  },
];

export const services = [
  {
    id: "service1",
    img: service1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "service2",
    img: service2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "service3",
    img: service3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "service4",
    img: service4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

export const contactDetails = [
  {
    id: "contact-type-1",
    type: "Mobile",
    detail: contactNumber,
  },
  {
    id: "contact-type-2",
    type: "E-Mail",
    detail: email,
  },
  {
    id: "contact-type-3",
    type: "Address",
    detail: address,
  },
];

export const items = [
  {
    id: "item-1",
    name: "Ring",
    img: [ring, sample1, sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-2",
    name: "Bracelet",
    img: [bracelet, sample1, sample2, sample3],
    type: "bracelet",
    price: 154000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-4",
    name: "Golden Ring",
    img: [sample2, ring, sample1, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: true,
    offerPrice: 75000,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-3",
    name: "Chain",
    img: [chain, sample1, sample2, sample3],
    type: "chain",
    price: 355000,
    isStock: false,
    hasOffer: false,
    offerPrice: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },

  {
    id: "item-5",
    name: "Diamond Ring",
    img: [ring, sample1, sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-6",
    name: "Golden Bracelet",
    img: [bracelet, sample1, sample2, sample3],
    type: "bracelet",
    price: 154000,
    isStock: true,
    hasOffer: true,
    offerPrice: 85000,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-7",
    name: "Silver Ring",
    img: [sample1,ring,  sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: true,
    offerPrice: 75000,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-8",
    name: "Gold Chain",
    img: [sample1, chain, sample2, sample3],
    type: "chain",
    price: 355000,
    isStock: false,
    hasOffer: false,
    offerPrice: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },

  [
    {
      id: "item-9",
      name: "Sapphire Chain",
      img: [chain, sample3, sample1, sample2],
      type: "chain",
      price: 125000,
      isStock: true,
      hasOffer: true,
      offerPrice: 105000,
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
    },
    {
      id: "item-10",
      name: "Emerald Ring",
      img: [sample3,ring, sample2,  sample1],
      type: "ring",
      price: 95000,
      isStock: true,
      hasOffer: false,
      offerPrice: null,
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
    },
    {
      id: "item-11",
      name: "Pearl Bracelet",
      img: [sample3,bracelet, sample1, sample2],
      type: "bracelet",
      price: 88000,
      isStock: false,
      hasOffer: false,
      offerPrice: null,
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
    },
    {
      id: "item-12",
      name: "Ruby Ring",
      img: [sample3,ring,  sample2, sample1],
      type: "ring",
      price: 120000,
      isStock: true,
      hasOffer: true,
      offerPrice: 105000,
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
    },
  ],
];
