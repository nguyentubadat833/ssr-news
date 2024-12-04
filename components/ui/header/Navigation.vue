<script setup lang="ts">
import metaInfo from "~/meta.info";

const {name: webName} = metaInfo
</script>

<template>
  <div>
    <div class="border-b">
      <div class="flex justify-between py-1 px-3 xl:px-56">
        <div class="flex items-center gap-2">
          <Icon name="fluent-emoji:rolled-up-newspaper" size="30"/>
          <span class="font-bold text-gray-500 tracking-wider">{{ webName.toUpperCase() }}</span>
        </div>
        <div class="flex gap-2 items-center">
          <span class="mr-1 cursor-pointer hover:underline text-gray-500 font-medium">Mới nhất</span>
          <UDivider orientation="vertical" class="h-5"/>
          <UButton
              icon="heroicons:magnifying-glass-solid"
              color="gray"
              variant="ghost"
              aria-label="search"
          />
          <DarkMode/>
        </div>
      </div>
    </div>
    <div class="shadow top-0 z-50 sticky backdrop-blur bg-background/75 py-3 border-b">
      <UContainer>
        <UiHeaderMenu/>
      </UContainer>
    </div>
  </div>
</template>

<style scoped>

</style>