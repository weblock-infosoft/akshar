import { createSlice } from "@reduxjs/toolkit";

const OurProductSlice = createSlice({
  name: "ourproduct",
  initialState: {
    selectedItem2: null,
    
  },

  reducers: {
    setSelectedItemour(state, action) {
      const selectedItem2 = { ...action.payload };

      return {
        ...state,
        selectedItem2: selectedItem2,
      };
    },
  },
});

export const { setSelectedItemour } = OurProductSlice.actions;

export default OurProductSlice.reducer;
