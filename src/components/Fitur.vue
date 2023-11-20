<script setup>
import FiturItem from './element/FiturItem.vue';
import IconDesain from './icons/Desain.vue'
import IconResponsive from './icons/Responsive.vue'
import IconSeo from './icons/Seo.vue'
import IconKeamanan from './icons/Keamanan.vue'
import IconMaintenance from './icons/Maintenance.vue'
import { onMounted, reactive, ref } from 'vue';
import { animate, inView, stagger } from 'motion';
onMounted(()=>{
     const item = document.querySelectorAll('.feat-item')
    inView('section',({target})=>{
      animate(target.querySelectorAll('.feat-item'),{
        opacity:[0,1],
        y:[100,0]
      },{
        duration:1,
        delay:stagger(0.2)
      })
    }
    
    )
})
const lists = reactive( [
    {
        icon: IconDesain,
        title: 'Desain yang Profesional',
        description: ' Saya spesialis dalam menciptakan desain website yang profesional dan sesuai dengan identitas merek perusahaan Anda'
    },
    {
        icon: IconResponsive,
        title: 'Responsif dan Mobile Friendly',
        description: ' Semua website yang saya buat sepenuhnya responsif, memastikan pengalaman pengguna yang optimal di berbagai perangkat, termasuk ponsel pintar dan tablet.'
    },
    {
        icon: IconSeo,
        title: 'Optimasi SEO',
        description: 'Berkomitmen untuk membantu Anda mencapai tujuan bisnis Anda melalui kehadiran digital yang kuat dan ramah SEO'
    },
    {
        icon: IconKeamanan,
        title: 'Keamanan yang Ditingkatkan',
        description: ' Setiap website yang saya buat dilengkapi dengan langkah-langkah keamanan terkini untuk melindungi data dan informasi penting perusahaan.'
    },
    {
        icon: IconMaintenance,
        title: 'Maintenance & Support',
        description: ' Setelah website selesai, saya menyediakan layanan dukungan dan pemeliharaan berkala untuk memastikan performa yang optimal.'
    },

])
</script>
<template>
    <section>
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
                <div v-for="item in lists" :key="item" class="feat-item" >
                    <fitur-item  :title="item.title" :description="item.description" class="shadow-2xl">
                            <component :is="item.icon" />
                    </fitur-item>
                </div>
            </div>
        </div>
    </section>
</template>
