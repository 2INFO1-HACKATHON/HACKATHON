import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  actions: {
    setUser(name, email, password) {
      const user = { name, email, password };
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
  
    loadUser() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    },
  
    clearUser() {
      this.user = null;
    },
  
    deleteUserData() {
      this.clearUser();
    }
  }
})
