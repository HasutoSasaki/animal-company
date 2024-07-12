<script setup lang="ts">
interface Props {
    title: string;
    color?: string;
}
const props = defineProps<Props>();
</script>

<template>
    <h2 class="title" :class="color">
        {{ props.title }}
    </h2>
</template>

<style scoped lang="scss">
.title {
    color: white;
    font-size: 40px;

    &.blue {
        color: $primary-color;
    }
}
</style>