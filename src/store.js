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
      const response = await axios.get(
        "https://mlazimy-api.vercel.app/category"
      );
      set({ categoryData: response.data.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching data", error);
      set({ isLoading: false });
    }
  },

  // fetch training data
  workData:[],
  currentPage: 1,
  totalCount: 0,
  fetchWorkData: async (page) => {
    try {
      set({isLoading:true , currentPage:page});
      const response = await axios.get(`https://mlazimy-api.vercel.app/work/?page=${page}`);
      set({ workData: response.data.data,totalCount:response.data.totalResults, isLoading: false });
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
  fetchSubcategories: async (id, page, limit, searchQuery = "") => {
    try {
      set({ isLoading: true, error: null }); // Reset error state

      const response = await axios.get(
        `https://mlazimy-api.vercel.app/category/${id}`,
        {
          params: {
            page: page,
            limit: limit,
            search: searchQuery,
          },
        }
      );

      if (response.status === 200) {
        set({
          subcategories: response.data.subcategories, 
          totalSubcategories: response.data.total,
          currentPage: page,
          isLoading: false,
          error: false,
        });
      }
    } catch (error) {
      console.error("Error fetching subcategories", error);
      set({ isLoading: false, error: true });
    }
  },

  // Get All Subcategory
  subcategoryData: [],
  subcategoryCount: 0,
  fetchSubcategory: async () => {
    try {
      const response = await axios.get(
        "https://mlazimy-api.vercel.app/subcategory"
      );
      set({ subcategoryData: response.data.data , subcategoryCount: response.data.results });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  },

  // Get All Notice
  notUserData: [],
  fetchUsersNotice: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://mlazimy-api.vercel.app/notice",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set({ notUserData: response.data.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  },

  // favoriteLectures
  favoriteLectures: JSON.parse(localStorage.getItem("favorites")) || [],
  toggleFavorite: (lecture) => {
    set((state) => {
      const isFavorited = state.favoriteLectures.some(
        (item) => item._id === lecture._id
      );
      let updatedFavorites;

      if (isFavorited) {
        // Remove from favorites
        updatedFavorites = state.favoriteLectures.filter(
          (item) => item._id !== lecture._id
        );
      } else {
        // Add to favorites
        updatedFavorites = [...state.favoriteLectures, lecture];
      }

      // Update localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { favoriteLectures: updatedFavorites };
    });
  },

  setFavoriteLectures: (updatedFavorites) => {
    set(() => {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favoriteLectures: updatedFavorites };
    });
  },
}));
