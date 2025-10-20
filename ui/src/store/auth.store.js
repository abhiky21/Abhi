import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "school-erp-auth",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
