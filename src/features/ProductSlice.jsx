import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    selectedItem: null,
    
  },

  reducers: {
    setSelectedItem(state, action) {
      const selectedItem = { ...action.payload };
     
      return {
        ...state,
        selectedItem: selectedItem,
      };
    },
  },
});

export const { setSelectedItem } = ProductSlice.actions;

export default ProductSlice.reducer;
