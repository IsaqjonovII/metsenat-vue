<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import { useUserStore } from "@/stores/user";
import Logo from "@/components/Logo.vue";

const router = useRouter();
const user = useUserStore();
const userForm = reactive({ username: "",password: "" });

function handleSubmit() {
  axios.post("https://club.metsenat.uz/api/v1/auth/login/", userForm)
      .then(({ data }) => {
        user.logIn(data.access);
        router.push({ name: "home" })
        alert("Auth successful");
      })
}

</script>
<template>
  <main class="h-screen center">
    <div class="w-full max-w-96 h-[550px] flex flex-col items-center gap-8">
      <div>
        <Logo />
      </div>
      <div
        class="w-full p-6 shadow-normal bg-white rounded-lg border border-gray-500"
      >
        <h1 class="mb-8">Kirish</h1>

        <form @submit.prevent="handleSubmit" method="post">
          <div class="grid gap-y-2 mb-4">
            <label class="font-semibold" for="login">LOGIN</label>
            <input
              class="border border-gray-500 h-10 rounded-lg outline-none px-3 focus:bg-gray-500/30"
              type="text"
              id="login"
              required
              v-model="userForm.username"
              name="login"
              minlength="4"
              autocomplete="off"
            />
          </div>
          <div class="grid gap-y-2 mb-4">
            <label class="font-semibold" for="password">PAROL</label>
            <input
              class="border border-gray-500 h-10 rounded-lg outline-none px-3 focus:bg-gray-500/30"
              type="password"
              id="password"
              required
              v-model="userForm.password"
              name="password"
              autocomplete="off"
              minlength="8"
            />
          </div>
          <button class="bg-blue p-2 w-full rounded-lg h-12 text-white">
            Kirish
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
