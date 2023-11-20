<script setup>
const clients = [
    {
        name: '7 Bata Pertama',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/7bata.png'
    },
    {
        name: 'Adi Pradana Lestari',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/apl.png'
    },
    {
        name: 'Global HPL',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/global.png'
    },
    {
        name: 'LP3I',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/lp3i.png'
    },
    {
        name: 'Sahid Group',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/sahid.png'
    },
    {
        name: 'Sany Perkasa',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/sany.png'
    },
    {
        name: 'Sanur Elok Residence ',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/ser.png'
    },
    {
        name: 'Star Chrometools ',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/starchrome.png'
    },
    {
        name: 'Wahana Bhakti Sasana ',
        logo: 'https://wahyudi.xyz/wp-content/uploads/2023/10/wbs.png'
    }
]
</script>
<template>
    <div class="py-10 bg-gradient-to-t from-primary-900 to-primary-950 border-y border-opacity-60 border-primary-800">
        <div class="container">
            <div class="flex flex-wrap justify-center items-center gap-5">
                <img :src="item.logo" :alt="item.name" srcset="" v-for="item in clients" :key="item">
            </div>
        </div>
    </div>
</template>