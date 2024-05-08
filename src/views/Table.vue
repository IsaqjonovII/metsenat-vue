<script setup>
import { formatDate, formatPrice } from "@/utils";
import Tag from "@/components/Tag.vue";
import { usePagination } from "@/composables";

const { currentData, currentPage, nextPage, prevPage } = usePagination();

const tableHeaders = [
  "#",
  "F.I.SH",
  "TEL.RAQAMI",
  "HOMIYLIK SUMMASI",
  "SARFLANGAN SUMMA",
  "SANA",
  "HOLATI",
  "AMALLAR",
];
</script>
<template>
  <div class="container p-4">
    <!--! TABLE HEADER -->
    <div class="w-full grid grid-cols-10">
      <div
        v-for="(th, index) in tableHeaders"
        :key="index"
        class="w-full text-center text-[0.9rem] text-gray-400"
        :class="index == 1 && ' col-start-2 col-end-5 !text-left'"
      >
        {{ th }}
      </div>
    </div>

    <!--! TABLE BODY -->
    <div>
      <div
        class="w-full grid grid-cols-10 py-3 bg-white rounded-lg my-2"
        v-for="{
          id,
          full_name,
          phone,
          sum,
          get_status_display,
          spent,
          created_at,
        } in currentData?.results"
      >
        <div class="text-center">{{ id }}</div>
        <div class="col-start-2 col-end-5 !text-left">{{ full_name }}</div>
        <div class="text-center">{{ phone }}</div>
        <div class="text-center">{{ formatPrice(sum) + " so'm" }}</div>
        <div class="text-center">{{ formatPrice(spent) + " so'm" }}</div>
        <div class="text-center">{{ formatDate(created_at) }}</div>
        <div class="text-center">
          <Tag :type="get_status_display" />
        </div>
        <div class="flex justify-center">
          <img
            class="w-6 h-6 cursor-pointer"
            src="/images/eye.svg"
            alt="eye icon"
          />
        </div>
      </div>
    </div>

    <!--! TABLE PAGINATION -->
    <div class="flex-between">
      <div>Jami: {{ currentData?.count }}</div>

      <div class="flex items-center">
        <button
          @click="prevPage"
          class="border border-gray rounded transition-colors hover:bg-gray-300"
        >
          <img
            class="w-8 h-8 object-cover"
            src="/images/chevron.svg"
            alt="prev button icon"
          />
        </button>
        <div class="text-lg font-semibold py-2 px-4">{{ currentPage }}</div>
        <button
          @click="nextPage"
          class="border border-gray rounded transition-colors hover:bg-gray-300"
        >
          <img
            class="rotate-180 w-8 h-8 object-cover"
            src="/images/chevron.svg"
            alt="prev button icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>
