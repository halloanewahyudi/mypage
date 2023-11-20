<script>
export default {
    props:['subTitle','title']
}
</script>
<template>
    <div class="w-full text-center">
        <span class="text-primary-900">{{ subTitle }}</span>
        <h3 class="text-xl font-semibold">{{ title }}</h3>
    </div>
</template>