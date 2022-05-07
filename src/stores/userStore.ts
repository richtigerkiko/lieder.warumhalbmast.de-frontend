import { defineStore } from 'pinia'
import { Auth } from 'aws-amplify'

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    isLoggedIn: false,
    userInfo: null,
  }),
  getters: {
    displayName: (state) => {
      if(state.userInfo === null){
        return ""
      }
      else{
        return `${state.userInfo.attributes.given_name} ${state.userInfo.attributes.family_name}`
      }
    }
  },
  actions: {
    async getLoginState() {
      try {
        const userSession = await Auth.currentAuthenticatedUser();
        this.userInfo = await Auth.currentUserInfo();
        this.isLoggedIn = true
      } catch {
        this.isLoggedIn = false
        this.userInfo = null
      }
    }
  }
})
