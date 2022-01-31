import { useState } from "react";

export const DELETE_CART_LIST_ITEM = "DELETE_CART_LIST_ITEM"
export const deleteCartListItemAction = (products) => {
  return {
    type: "DELETE_CART_LIST_ITEM",
    payload: products,
  };
};

export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_"
export const fetchProductsInCartAction = (products) => {
  return {
    type:"FETCH_PRODUCTS_IN_CART",
    payload:products
  }
};

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: "",
    },
  };
};
