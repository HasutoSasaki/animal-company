<script setup lang="ts">
interface Props {
    bgColor?: string;
}

const props = defineProps<Props>();

</script>
<template>
    <div class="section-container" :class="`bg-${bgColor}`">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.section-container {
    background-color: #f5f5f5;
    padding-top: 64px;
    padding-bottom: 160px;

    &.bg-blue {
        background-color: $primary-color;
    }
}
</style>