<script>
export default {
    props: {
        number: {
            type: Number
        },
        image: {
            type: String,
            dafault: ""
        },
        title: {
            type: String,
            default: "sebuah Judul"
        },
        description: {
            type: String,
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis."
        }
    }
}
</script>
<template>
    <div class="rounded-xl bg-white hover:shadow-xl duration-200 overflow-hidden group h-full">
        <div class="w-full overflow-hidden relative flex justify-center items-center">
            <div class="w-12 h-12 rounded-full bg-secondary-500 flex justify-center items-center absolute top-2 left-2 z-20 font-bold text-2xl">{{ number }}</div>
            <img :src="image" alt="" srcset="" class="group-hover:scale-110 duration-200">
        </div>
        <div class="p-6 ">
            <h4 class="text-lg font-semibold text-primary-900">{{ title }}</h4>
            {{ description }}
        </div>
    </div>
</template>
