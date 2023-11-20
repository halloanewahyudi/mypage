<script>
export default {
    props: ['title', 'description']
}
</script>
<template>
    <div class="flex gap-5 bg-white p-[25px] rounded-xl h-full">
        <div>
            <slot />
        </div>
        <div class="flex flex-col gap-2">
            <h4 class="text-[18px] text-primary-900 font-semibold">{{ title }} </h4>
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>