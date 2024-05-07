import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const token = ref("");

  function logIn(accessToken: string) {
    token.value = accessToken;
    localStorage.setItem("token", token.value);
  }
  const logOut = () => (token.value = "");

  return { token, logIn, logOut };
});
