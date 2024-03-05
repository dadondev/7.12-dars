import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    modal: false,
    products: [
      {
        name: "Fall Limited Edition Sneakers",
        price: 125,
        count: 4,
        url: "/image-product-1.jpg",
      },
    ],
    totalPrice: null,
  },
  reducers: {
    checkOut(state) {
      state.products = [];
    },
    totalPrice(state) {
      state.totalPrice = state.products.reduce((acc, i) => acc + i, 0);
    },
    setModal(state, { payload }) {
      state.modal = payload;
    },
    pushProduct(state, { payload }) {
      const product = state.products.find(
        (pro) => pro.name == payload.name && pro.price == payload.price
      );
      if (product) {
        product.count = payload.count;
      } else {
        state.products.push(payload);
      }
    },
    delProduct(state, { payload }) {
      state.products = state.products.filter((e) => e.url != payload);
      console.log(state.products);
    },
  },
});

export default appSlice;

// obj = {
//     name:"isfjioas",
//     count:Number,
//     price:Number,
// img:url,
// }
