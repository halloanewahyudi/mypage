<script setup>
import Testimony from './element/Testimony.vue';
const clients = [
    {
        photo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/avatar.png',
        testimony: 'Semenjak saya di buatkan website, bisnis saya jadi lebih hidup klien bertambah',
        name: 'Yoyon',
        position: 'B2B Sinergi berkarya'
    },
    {
        photo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/avatar.png',
        testimony: 'Membantu dalam memperkenalkan bisnis kami dan support selalu setia',
        name: 'Anna',
        position: 'Sanur Elok Residence'
    },
    {
        photo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/ceppy.png',
        testimony: 'komunikasi dengan klien karena bisa menyampaikan',
        name: 'Ceppy',
        position: '7Bata Pertama'
    }
]
</script>
<template>
    <div class="bg-primary-950 py-16">
        <div class="container">
            <div class="w-full text-center mb-16">
                <span class="text-primary-200">Apa kata mereka</span>
                <h3 class="text-xl font-semibold text-white">Yang pernah bekerjasama dangan saya</h3>
            </div>
            <div class="flex gap-5  justify-center flex-wrap ">
                <div v-for="item in clients" :key="item">
                    <Testimony :photo="item.photo" :testimony="item.testimony" :name="item.name" :position="item.position"
                        class="max-w-sm text-primary-50" />
                </div>
            </div>
        </div>
    </div>
</template>