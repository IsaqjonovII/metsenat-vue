<script setup>
defineProps({ type: String });
</script>
<template>
  <div
    :class="
      type === 'Moderatsiyada'
        ? 'text-[#FFA445]'
        : type === 'Yangi'
        ? 'text-blue-100'
        : type === 'Tasdiqlangan'
        ? 'text-green'
        : 'text-gray-400'
    "
  >
    {{ type }}
  </div>
</template>
