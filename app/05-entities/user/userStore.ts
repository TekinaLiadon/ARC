interface UserState {
  token: string | null;
}

export const useUserStore = defineStore("user-store", {
  state: (): UserState => ({
    token: null,
  }),
  actions: {
    logIn(token: string) {
      this.token = token;
    },
    logOut() {
      this.token = null;
      this.$reset();
    },
    async fetchUser() {},
  },
  persist: true,
});
