import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = reactive<{ name: string; token: string }>(
    JSON.parse(localStorage.getItem("user")!) || {
      name: "",
      token: "",
    }
  );

  function logIn(userdata: { name: string; token: string }) {
    user.name = userdata.name;
    user.token = userdata.token;
    localStorage.setItem("user", JSON.stringify(user));
  }
  const logOut = () => (user.token = "");

  return { user, logIn, logOut };
});
