import { heroSlider1, heroSlider2, heroSlider3 } from "../assets";
import { facebook, instargram } from "../assets";
import { service1, service2, service3, service4 } from "../assets";

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
    id: 'contact-type-1',
    type: 'Mobile',
    detail: contactNumber
  },
  {
    id: 'contact-type-2',
    type: 'E-Mail',
    detail: email
  },
  {
    id: 'contact-type-3',
    type: 'Address',
    detail: address
  },
]
