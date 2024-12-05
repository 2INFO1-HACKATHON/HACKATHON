import { defineStore  } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    user: null
  }),

  actions: {
    setUser(name, email, password) {

      const user = { name, email, password }
  
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(user))

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


    getters: {
      isLoggedIn: (state) => !!state.user
    },
    
    logout() {
      this.user = null
      this.isLoggedIn = false
    },


    deleteUserData() {
      this.clearUser();
    }
  }
})

 
