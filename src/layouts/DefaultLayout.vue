<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>
<template>
    <div>
        <AppHeader />
        <main>
            <slot />
        </main>
        <footer></footer>

    </div>
</template>