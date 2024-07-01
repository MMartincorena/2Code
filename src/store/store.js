import { configureStore } from "@reduxjs/toolkit";
import { sliceMUI } from '/src/slices/sliceMUI.js';

export const storeRedux = configureStore({
  reducer: {
    reducerMui: sliceMUI.reducer, 
  },
});

/* sliceMUI.reducer / borrar el .reducer y anda, perono el darkmode*/