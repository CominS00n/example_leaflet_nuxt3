import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    dark: false,
    theme: "",
  }),
  actions: {
    toggleTheme() {
      this.dark = !this.dark;
      localStorage.setItem("dark", this.dark ? "true" : "false");
      this.loadTheme();
    },
    loadTheme() {
      const theme = localStorage.getItem("dark");
      if (theme === "true") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
});
