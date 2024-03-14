import { heroSlider1, heroSlider2, heroSlider3 } from "../assets";
import { facebook, instargram } from "../assets";
import { service1, service2, service3, service4 } from "../assets";
import { ring, bracelet, chain } from "../assets";
import { sample1, sample2, sample3 } from "../assets";
import { jewellerySliderImage } from "../assets";
import {
  jewelleryRing1,
  jewelleryRing2,
  jewelleryRing3,
  jewelleryRing4,
  jewelleryRing5,
  jewelleryRing6,
  jewelleryRing7,
  jewelleryRing8,
  jewelleryRing9,
  jewelleryRing10,
  jewelleryRing11,
  jewelleryRing12,
  jewelleryRing13,
  jewelleryRing14,
  jewelleryRing15,
  jewelleryRing16,
  jewelleryRing17,
  jewelleryRing18,
  jewelleryRing19,
  jewelleryRing20,
  jewelleryRing21,
  jewelleryRing22,
  jewelleryRing23,
  jewelleryRing24,
  jewelleryRing25,
  jewelleryRing26,
} from "../assets";

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
    img: [jewelleryRing1, sample1, sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    date: "2023-06-20",
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
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-4",
    name: "Golden Ring",
    img: [jewelleryRing2, ring, sample1, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: true,
    offerPrice: 75000,
    date: "2023-06-25",
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
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },

  {
    id: "item-5",
    name: "Diamond Ring",
    img: [jewelleryRing3, sample1, sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    date: "2023-07-02",
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
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },
  {
    id: "item-7",
    name: "Silver Ring",
    img: [jewelleryRing4, ring, sample2, sample3],
    type: "ring",
    price: 85000,
    isStock: true,
    hasOffer: true,
    offerPrice: 75000,
    date: "2023-07-10",
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
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero quo tempora, eveniet eaque, dolor tempore enim beatae magnam magni doloremque facere illum voluptas unde?",
  },

  {
    id: "item-9",
    name: "Sapphire Chain",
    img: [chain, sample3, sample1, sample2],
    type: "chain",
    price: 125000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-10",
    name: "Emerald Ring",
    img: [jewelleryRing5, ring, sample2, sample1],
    type: "ring",
    price: 95000,
    isStock: true,
    hasOffer: false,
    offerPrice: null,
    date: "2022-05-20",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-11",
    name: "Pearl Bracelet",
    img: [sample3, bracelet, sample1, sample2],
    type: "bracelet",
    price: 88000,
    isStock: false,
    hasOffer: false,
    offerPrice: null,
    date: "2022-03-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-12",
    name: "Ruby Ring",
    img: [jewelleryRing6, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2022-05-4",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-13",
    name: "Ruby Ring",
    img: [jewelleryRing7, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2022-04-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-14",
    name: "Ruby Ring",
    img: [jewelleryRing8, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2022-08-30",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-15",
    name: "Ruby Ring",
    img: [jewelleryRing9, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-10-12",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-16",
    name: "Ruby Ring",
    img: [jewelleryRing10, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-10-13",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-17",
    name: "Ruby Ring",
    img: [jewelleryRing11, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-09-23",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-18",
    name: "Ruby Ring",
    img: [jewelleryRing12, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2024-01-02",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-19",
    name: "Ruby Ring",
    img: [jewelleryRing13, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-09-07",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-20",
    name: "Ruby Ring",
    img: [jewelleryRing14, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2024-02-12",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-21",
    name: "Ruby Ring",
    img: [jewelleryRing15, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-07-30",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-22",
    name: "Ruby Ring",
    img: [jewelleryRing16, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-12-29",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },

  {
    id: "item-23",
    name: "Ruby Ring",
    img: [jewelleryRing17, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-10-19",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },

  {
    id: "item-24",
    name: "Ruby Ring",
    img: [jewelleryRing18, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-11-04",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-25",
    name: "Ruby Ring",
    img: [jewelleryRing19, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-07-27",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-26",
    name: "Ruby Ring",
    img: [jewelleryRing20, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-11-29",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-27",
    name: "Ruby Silver Ring",
    img: [jewelleryRing21, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-08-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-28",
    name: "Diamond Gold Ring",
    img: [jewelleryRing22, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-11-25",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-29",
    name: "Titanium Ring",
    img: [jewelleryRing23, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-09-03",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-30",
    name: "Gold 25K Ring",
    img: [jewelleryRing24, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-12-06",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-31",
    name: "Gold 22K Ring",
    img: [jewelleryRing25, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-09-25",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },
  {
    id: "item-32",
    name: "Gold 18K Ring",
    img: [jewelleryRing26, ring, sample2, sample1],
    type: "ring",
    price: 120000,
    isStock: true,
    hasOffer: true,
    offerPrice: 105000,
    date: "2023-07-14",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio itaque quisquam illo ipsa tempore, aperiam deserunt repellat laborum veritatis.",
  },

];

export const jewelerySliderAssets = [
  {
    id: "1",
    img: jewellerySliderImage,
  },
  {
    id: "2",
    img: jewellerySliderImage,
  },
  {
    id: "3",
    img: jewellerySliderImage,
  },
];
