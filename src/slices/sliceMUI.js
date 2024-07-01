import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modeApp: "light",
  modal: {
    isOpen: false,
    contenido: "contenido del modal",
  },
};

export const sliceMUI = createSlice({
  name: "muiSlice",
  initialState,
  reducers: {
    modalApp: (state) => {
      console.log("anda el slice");
    },
  },
});

export const { modalApp } = sliceMUI.actions
