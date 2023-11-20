<script setup>
import Card from './element/Card.vue';
import SectionTitleVue from './element/SectionTitle.vue';
import { animate, inView, stagger } from 'motion';
import { onMounted } from 'vue';
onMounted(()=>{
    
    inView('section',({target})=>{
      animate(target.querySelectorAll('.step-item'),{
        opacity:[0,1],
        y:[100,0]
      },{
        duration:1,
        delay:stagger(0.2)
      })
    }
    
    )
})
const lists = [
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/konsultasi-awal-1.png',
        title:'Konsultasi Awal',
        description:'Kami akan berkomunikasi dengan Anda untuk memahami kebutuhan dan tujuan Anda. Ini adalah tahap penting untuk merancang konsep dan fitur utama situs web Anda.'
    },
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/desain-konsep-1.png',
        title:'Desain & Konsep',
        description:'Setelah ide-ide awal ditemukan, tim akan merancang tampilan visual situs web Anda. Ini mencakup pemilihan warna, desain logo, tata letak halaman, dan fitur khusus yang Anda inginkan.'
    },
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/coding-1.png',
        title:'Coding & Developing',
        description:'Ini adalah tahap teknis di mana situs web Anda akan dibangun. Front-end mengacu pada bagian yang terlihat oleh pengguna, sementara back-end adalah infrastruktur yang mendukung fungsionalitas situs web.'
    },
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/kontent-1.png',
        title:'Konten',
        description:'Menambahkan konten seperti teks, gambar, video, dan informasi bisnis adalah bagian integral dari pembuatan website. Konten harus relevan dan menarik bagi audiens Anda.'
    },
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/launching-1.png',
        title:'Peluncuran',
        description:'Setelah Anda puas dengan hasilnya, situs web Anda siap untuk diluncurkan dan diakses oleh publik. Tim pengembang akan mengelola semua aspek teknis yang terkait dengan peluncuran.'
    },
    {
        img:'https://wahyudi.xyz/wp-content/uploads/2023/10/support-1.png',
        title:'Support & Maintenance',
        description:'Sebuah layanan pembuatan website yang berkualitas akan memberikan dukungan purna jual yang kuat. Mereka akan membantu Anda memahami cara mengelola, memperbarui, dan mengoptimalkan situs web Anda seiring berjalannya waktu.'
    }
]
</script>
<template>
    <div>
        <div class="container ">
        <SectionTitleVue 
        subTitle="Kami akan membantu Anda merancang dan mengembangkan website" 
        title="dan bagaimana cara memulai dan prosesnya ?" class="mb-16"/>
        <section>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
                <div v-for="(item , index) in lists" :key="index" class="step-item">
                    <Card :number="index+1" :image="item.img" :title="item.title" :description="item.description" />
                </div>
            </div>
        </section>
        </div>
    </div>
</template>