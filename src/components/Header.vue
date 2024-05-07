<script setup>
import Logo from "@/components/Logo.vue";
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();
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

          <button>
            <img src="/images/logout.svg" alt="logout icon" />
          </button>
        </div>
      </div>
    </div>
    <div class="container flex-between py-4">
      <div class="w-full">
        <button
          class="w-full max-w-60 py-2 text-white rounded-l-lg border border-blue"
          :class="false ? 'bg-blue' : 'bg-transparent text-blue'"
        >
          DASHBOARD
        </button>
        <button
          class="w-full max-w-60 py-2 text-white border border-blue"
          :class="true ? 'bg-blue' : 'bg-transparent text-blue'"
        >
          HOMIYLAR
        </button>
        <button
          class="w-full max-w-60 py-2 text-white rounded-r-lg border border-blue"
          :class="false ? 'bg-blue' : 'bg-transparent text-blue'"
        >
          TALABALAR
        </button>
      </div>

      <div class="flex-between gap-4">
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
