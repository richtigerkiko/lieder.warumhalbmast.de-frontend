import { defineStore } from 'pinia'
import { Auth } from 'aws-amplify'

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    isLoggedIn: false,
    userInfo: null
  }),
  getters: {
  },
  actions: {
    async getLoginState() {
      try {
        const userSession = await Auth.currentAuthenticatedUser();
        const user = await Auth.currentUserInfo();
        this.isLoggedIn = true
      } catch {
        this.isLoggedIn = false
      }
    }
  }
})
