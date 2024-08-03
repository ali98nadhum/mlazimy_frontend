import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  // Dark mode state
  isDark: false,
  setIsDark: (isDark) => set({ isDark }),
  

  // Loading state
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),


  // fetch category data state
  categoryData: [],
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get('https://mlazimy-api.vercel.app/category');
      set({ categoryData: response.data.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching data", error);
      set({ isLoading: false });
    }
  },

  // fetch subcategory data state
  subcategories: [],
  totalSubcategories: 0,
  currentPage: 1,
  itemsPerPage: 6,
  fetchSubcategories: async (id, page, limit) => {
    try {
      set({ isLoading: true });
      const response = await axios.get(`https://mlazimy-api.vercel.app/category/${id}`, {
        params: {
          page: page,
          limit: limit,
        },
      });
      set({
        subcategories: response.data.subcategories,
        totalSubcategories: response.data.total,
        currentPage: page,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching subcategories", error);
      set({ isLoading: false });
    }
  },


   // fetch work data state
   workData: [],
   totalCount: 0,
   currentPage: 1,
   itemsPerPage: 6,
   fetchWorkData: async (page) => {
     try {
       set({ isLoading: true });
       const response = await axios.get(`https://mlazimy-api.vercel.app/work?page=${page}`);
       set({
         workData: response.data.data,
         totalCount: response.data.totalResults,
         currentPage: page,
         isLoading: false,
       });
     } catch (error) {
       console.error("Error fetching work data", error);
       set({ isLoading: false });
     }
   },

}));
