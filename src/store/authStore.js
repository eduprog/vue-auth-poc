import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    refreshTokenExpiration: null,
  }),
  actions: {
    setToken(data) {
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
      this.refreshTokenExpiration = data.refreshTokenExpiration;
    },
    logout() {
      this.accessToken = null;
      this.refreshToken = null;
      this.refreshTokenExpiration = null;
    }
  }
});
