<script setup>
import Whatsapp from './icons/Whatsapp.vue';
import Mail from './icons/Mail.vue';
import { ref } from 'vue';

</script>
<template>
    <div class="bg-primary-950  text-gray-200  py-20">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/2">
                    <div class=" flex flex-col gap-5 ">
                        <p>
                            Saya sangat tertarik untuk berdiskusi lebih lanjut tentang bagaimana saya dapat membantu Anda
                            mencapai tujuan online.
                        </p>
                        <p>
                            Apakah Anda bersedia meluangkan waktu singkat untuk membicarakannya lebih lanjut? Saya
                            senang untuk memberikan presentasi lebih lanjut atau menyesuaikan solusi yang sesuai dengan
                            kebutuhan
                            khusus Anda.
                        </p>
                        <p>
                            Hormat Saya, <br>
                            <strong> Wahyudi</strong> <br>
                            <small class="italic"> Web design & Developer</small>
                        </p>
                        <p class="p-6 rounded-lg border max-w-max bg-white bg-opacity-10 border-opacity-30">
                           <a href="https://api.whatsapp.com/send?phone=6289636192223" class="flex gap-2 items-center text-white">
                            <span> <whatsapp></whatsapp> </span>
                            <span> 0896 3619 2223</span>
                           </a>
                           <a href="mailto:saya@wahyudi.xyz" class="flex gap-2 items-center text-white">
                            <span><Mail/> </span>
                            <span>saya@wahyudi.xyz</span>
                           </a>
                        </p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <div class="flex gap-3 items-center">
                      
                    </div>      
                </div>
            </div>
        </div>
    </div>
</template>