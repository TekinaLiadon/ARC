interface UserState {
  token: string | null;
}

export const useUserStore = defineStore("user-store", {
  state: (): UserState => ({
    token: null,
  }),
  actions: {
    logIn(token) {
      this.token = token;
    },
    async fetchUser() {
      await arcFetch("");
    },
  },
  persist: true,
});
