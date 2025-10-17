import type { ThemeKey } from "~/06-shared/theme-system";

import { themes } from "~/06-shared/theme-system";

interface UserState {
  token: string | null;
  activeTheme: ThemeKey;
}
export const useUserStore = defineStore("user-store", {
  state: (): UserState => ({
    token: null,
    activeTheme: "arcaneDark",
  }),
  actions: {
    logIn(token: string) {
      this.token = token;
    },
    logOut() {
      this.token = null;
      this.$reset();
    },
    async fetchUser(): Promise<void> {},
  },
  persist: true,
});
