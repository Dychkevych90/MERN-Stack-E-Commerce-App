import headphones from "./media/image/headphones1.png";
import phone from "./media/image/phone.png";
import samsung from "./media/image/Samsung.png";
import banner from './media/image/banner-31.jpg'
import banner1 from './media/image/banner-36.jpg'
import banner2 from './media/image/banner-32.jpg'

export const sliderItems = [
  {
    id: 1,
    img: headphones,
    smallTitle: "Hot Items Today",
    title: "Award-winning Headphones",
    desc: " GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
    price: "199.99",
  },
  {
    id: 2,
    img: phone,
    smallTitle: "Hot Items Today",
    title: "New model XL series",
    desc: "GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
    price: "39.99",
  },
  {
    id: 3,
    img: samsung,
    smallTitle: "Hot Items Today",
    title: "Earphones for you",
    desc: "GET FLAT 30% OFF FOR NEW ARRIVALS",
    bg: "fbf0f4",
    price: "115.50",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
  },
];

export const banners = [
  {
    id: 1,
    img: banner,
    title: "Best listening music",
  },
  {
    id: 2,
    img: banner1,
    title: "Best world games",
  },
  {
    id: 3,
    img: banner2,
    title: "Pro Action Camera",
  },
];

const popularProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    title: 'T-shirt',
    price: '35'
  },
  {
    id: 2,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    title: 'Jacket women',
    price: '75'
  },
  {
    id: 3,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    title: 'shirt',
    price: '15'
  },
  {
    id: 4,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    title: 'Dress',
    price: '135'
  },
  {
    id: 5,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    title: 'Bag',
    price: '5'
  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    id: 7,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    title: 'Bag',
    price: '5'
  },
  {
    id: 8,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    title: 'Jacket',
    price: '115'
  },
];

export { popularProducts };
