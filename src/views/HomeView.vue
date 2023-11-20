<script setup>
import Hero from '../components/Hero.vue';
import Sambutan from '../components/Sambutan.vue';
import Fitur from '../components/Fitur.vue';
import Proses from '../components/Proses.vue';
import Performa from '../components/Performa.vue';
import TestiSection from '../components/TestiSection.vue';
import Clients from '../components/Clients.vue';
import LastSection from '../components/LastSection.vue'
</script>

<template>
  <main>
    <Hero class="mb-20" />
    <Sambutan class="mb-20" />
    <Fitur class="mb-20" />
    <Proses class="mb-20" />
    <Performa />
    <TestiSection />
    <Clients />
    <LastSection />
  </main>
</template>
