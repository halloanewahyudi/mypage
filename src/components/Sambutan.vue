<script setup>
import { computed, onMounted, ref } from "vue";
import { useStorage } from '@vueuse/core'
import { animate, inView } from "motion";
import { useRoute } from "vue-router";
const route = useRoute()
const kepada = route.query.kepada
const state = useStorage('my-store', { nama: kepada})
const counter = ref(null)
const number = ref(120)
onMounted(() => {
    setTimeout(() => {
        state.value = null
    }, 60000 );
    const cn = document.querySelector('.counter')
    inView(cn, ({ target }) => {
        animate(
            (target) => counter.value.innerHTML = Math.round(target * number.value),
            { duration: 2, easing: "ease-out" }
        )
    }
    )
})

</script>
<template>
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="flex flex-col gap-5">
                <h4 class="font-semibold">Salam, <span v-if="state.nama">{{ state.nama }}</span> <span v-else> {{ kepada }}</span> </h4>
                <p>
                    Saya Wahyudi, seorang ahli pembuatan website dengan pengalaman lebih dari 7 tahun dalam industri ini.
                </p>
                <p>
                    Saya mengerti bahwa sebuah website yang menarik dan responsif adalah salah satu kunci kesuksesan bisnis
                    modern. Dengan ini, saya ingin menawarkan layanan saya untuk membantu Anda meningkatkan online presence
                    dan mendapatkan keuntungan lebih besar.
                </p>
            </div>
            <div>
                <div class="counter p-6 rounded-lg border-2 border-primary-500 flex flex-col gap-5">
                    <div
                        class="flex flex-wrap text-center lg:text-left justify-center items-center gap-2 lg:divide-x divide-primary-700 ">
                        <div ref="counter" class="text-3xl lg:text-7xl font-light text-primary-500"> </div>
                        <div class="text-xl h-full p-4">
                            <p> Project yang <br> pernah di kerjakan </p>
                        </div>
                    </div>
                    <p>
                        Lebih dari 7 tahun saya berkarya, berbagai tantangan proyek dan berupaya menemukan solusi yang
                        kreatif mewarnai perjalanan. sehingga menghasilkan portofolio berbagai jenis website
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>