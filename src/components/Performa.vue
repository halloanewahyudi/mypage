<script setup>
import SectionTitle from './element/SectionTitle.vue';
import { ref } from 'vue';

</script>
<template>
    <div class="relative w-full overflow-x-hidden">
        <div class="w-full h-60 block rounded-t-[300px] bg-primary-950 absolute bottom-0 z-0"></div>

        <div class="container relative">
            <SectionTitle subTitle="Kami berusaha menampilkan performa website yang baik"
                title="Untuk  menunjang  optimalisasi pada pencarian google" class="mb-5" />

            <h4 class="text-center max-w-screen-md mx-auto mb-20">Setiap website yang saya buat selalu mempertimbangkan
                secara
                teknis baik struktur dan desain serta source code yang efisien dan efektif</h4>

            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center">
                <div>
                    <img src="https://wahyudi.xyz/wp-content/uploads/2023/10/perform-b-1.png" alt="" srcset="">
                </div>
                <div>
                    <img src="https://wahyudi.xyz/wp-content/uploads/2023/10/preform-a-1.png" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>
</template>