<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue';
</script>

<template>
  <div class="main-page max-w-screen-2xl mx-auto min-h-screen  text-gray-800 relative overflow-hidden">
  <header>
    <div class="container py-6">
      <div class="flex gap-2 flex-wrap items-center">
        <Logo /> 
        <a href="https://api.whatsapp.com/send?phone=6289636192223">
          <h4 class="font-semibold text-xl">0896 3619 2223</h4>
        </a>
      </div>
    </div>
  </header>
  <RouterView />
</div>
</template>
<style scoped>
.main-page{
  @apply bg-primary-50 bg-[url('@/assets/img/aksen.svg')] bg-no-repeat bg-left-top; 
  background-attachment: fixed;
  background-size: contain;
}
</style>
