import { createSlice } from "@reduxjs/toolkit";
import warehouses from "../data/warehouse.json";

const initialState = {
  warehousesData: warehouses,
  filteredData: warehouses,
  searchTerm: "",
  filterTerm: "",
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    setWarehousesData: (state, action) => {
      state.warehousesData = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
});

export const {
  setWarehousesData,
  setSearchTerm,
  setFilteredData,
  setFilterTerm,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;
