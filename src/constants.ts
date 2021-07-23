import pc1 from "@static/images/pc1.svg";
import pc2 from "@static/images/pc2.svg";
import pc3 from "@static/images/pc3.svg";
import pc4 from "@static/images/pc4.svg";
import pc5 from "@static/images/pc5.svg";
import pc6 from "@static/images/pc6.svg";
import pc7 from "@static/images/pc7.svg";
import pc8 from "@static/images/pc8.svg";
import pc9 from "@static/images/pc9.svg";
import pc10 from "@static/images/pc10.svg";
import pc11 from "@static/images/pc11.svg";

export interface Icake {
  img: string;
  title: string;
  info: string;
  price: number;
  id: number;
  // amount: number;
  //   amount: number;
  //   totalPrice: number;
}
// export const card: Icard = {};
export const cardList: Icake[] = [
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 1,
    // amount: 0,
  },
  {
    img: pc2,
    title: "Red Velvet",
    info:
      "A chocolate sponge, coloured naturally with beetroot and topped off with cream cheese.",
    price: 6.7,
    id: 2,
    // amount: 0,
  },
  {
    img: pc3,
    title: "Mint Chip",
    info:
      "Homemade chocolate cupcakes topped with thick & creamy mint chocolate chip frosting.",
    price: 16.3,
    id: 3,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
  {
    img: pc1,
    title: "Carrot",
    info: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    price: 5.4,
    id: 4,
    // amount: 0,
  },
];

export interface IcakeOrder {
  [key: number]: { itemTotalPrice: number; amount: number };
}
export interface Iorder {
  // key - id of Icake; // value - amount of elemtents
  collection: IcakeOrder;
  totalItems: number;
  totalPrice: number;
  // should sum all amounts and itemTotalPrice of each cake.Id
}
// export const order: Iorder = {};

export const minusRestriction = 0;
export const plusRestriction = 10;

export const closeIconSize = {
  mobile: {
    cart: {
      width: 8.5,
      height: 8.5,
    },
    confirmation: {
      width: 10.5,
      height: 10.5,
    },
  },
  notMobile: {
    cart: {
      width: 17,
      height: 17,
    },
    confirmation: {
      width: 19,
      height: 19,
    },
  },
};

export const checkoutHeader = {
  primary: "Check out",
  secondary: "Complete your order and we'll bring it to your door. ",
};

export const orderConstants = {
  total: "Total to pay",
  dollar: "$",
};
