<script setup>
import { ref } from "vue";

import Logo from "@/components/Logo.vue";
import { useUserStore } from "@/stores/user";

const { user, logOut } = useUserStore();
const activeBtnId = ref(1);
</script>
<template>
  <header class="bg-white px-4">
    <div class="shadow-normal py-4">
      <div class="container flex-between">
        <Logo />

        <div class="flex-between gap-4">
          <button
            class="p-2 bg-gray-200 rounded-md flex-between gap-2 transition-300 hover:bg-gray-300"
          >
            <span class="capitalize">
              {{ user.name ?? "User" }}
            </span>
            <img src="/images/user.svg" alt="user icon" />
          </button>

          <button @click="logOut">
            <img src="/images/logout.svg" alt="logout icon" />
          </button>
        </div>
      </div>
    </div>
    <div class="container flex-between py-4">
      <div class="w-full">
        <button
          @click="activeBtnId = 0"
          class="w-full max-w-60 py-2 text-blue rounded-l-lg border border-blue"
          :class="activeBtnId === 0 ? 'bg-blue text-white' : 'bg-transparent'"
        >
          DASHBOARD
        </button>
        <button
          @click="activeBtnId = 1"
          class="w-full max-w-60 py-2 text-blue border border-blue"
          :class="activeBtnId === 1 ? 'bg-blue text-white' : 'bg-transparent'"
        >
          HOMIYLAR
        </button>
        <button
          @click="activeBtnId = 2"
          class="w-full max-w-60 py-2 text-blue rounded-r-lg border border-blue"
          :class="activeBtnId === 2 ? 'bg-blue text-white' : 'bg-transparent'"
        >
          TALABALAR
        </button>
      </div>

      <div class="flex justify-end gap-4 w-full">
        <div
          class="flex-between gap-2 border border-gray h-10 rounded-md px-2 bg-gray-300"
        >
          <img src="/images/search.svg" alt="search icon" />
          <input
            type="text"
            class="outline-none w-full h-full bg-transparent"
            placeholder="Izlash..."
          />
        </div>

        <button class="flex-between gap-2 bg-blue/10 px-3 py-2 rounded-md">
          <img src="/images/filter.svg" alt="filter icon" />
          Filter
        </button>
      </div>
    </div>
  </header>
</template>
