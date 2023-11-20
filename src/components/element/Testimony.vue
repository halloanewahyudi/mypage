<script setup>
defineProps(['testimony', 'name', 'position', 'photo'])
</script>
<template>
    <div class="flex gap-3">
        <div class="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center shrink-0">
            <img :src="photo" alt="" srcset="">
        </div>
        <div>
            <p>{{ testimony }}</p>
            <div class="flex items-center gap-2">
                <strong>{{ name }}</strong>
                <span class="w-32 h-0.5 bg-secondary-500"></span>
            </div>
            <span class="text-sm italic">{{ position }}</span>
        </div>
    </div>
</template>