<script setup lang='ts'>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
    <div>
        <AppHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped lang='scss'></style>