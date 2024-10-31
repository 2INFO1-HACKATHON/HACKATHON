import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(name, email, password) {
      this.user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    clearUser() {
      this.user = null;
      localStorage.removeItem('user');
    },
    loadUser() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    },
  },
});
