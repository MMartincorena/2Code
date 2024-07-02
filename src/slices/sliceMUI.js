/* import { createSlice } from "@reduxjs/toolkit";

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

export const { modalApp } = sliceMUI.actions */


/* ----------------------------- */


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
    toggleTheme: (state) => {
      state.modeApp = state.modeApp === "light" ? "dark" : "light";
    },
    modalApp: (state) => {
      console.log("anda el slice");
    },
  },
});

export const { toggleTheme, modalApp } = sliceMUI.actions;
export default sliceMUI.reducer;
