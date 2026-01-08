import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  searchTerm: '',
  filteredData: []
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.data.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filteredData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  }
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
