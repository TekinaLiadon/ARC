interface UserState {
  token: string | null;
}

export const useUserStore = defineStore("user-store", {
  // TODO Предлагаю писать сторе в Композишн Апи и больше их дробить если перегруз
  state: (): UserState => ({
    token: null,
  }),
  actions: {
    logIn(token: string): void {
      this.token = token;
    },
    logOut(): void {
      this.token = null;
      this.$reset();
    },
    async fetchUser(): Promise<void> {},
  },
  persist: true,
});
