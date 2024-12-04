<script setup lang="ts">

import type {IMenuItem} from "~/typing/IMenuItem";

const {data: menuItems} = useFetch('/api/layout/menu', {
  transform(result) {
    return result as IMenuItem[]
  }
})

</script>

<template>
  <div class="flex justify-between w-full">
    <div class="flex items-center gap-2 cursor-pointer">
      <Icon name="heroicons:home-modern-16-solid" size="25"/>
      <span class="tracking-wide font-medium">Trang chủ</span>
    </div>
    <div class="flex items-center gap-6">
      <div v-for="item in menuItems">
        <span class="tracking-wide cursor-pointer">{{ item.label }}</span>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>