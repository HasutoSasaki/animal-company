<script setup lang="ts">
interface Props {
    itemInfo: {
        title: string,
        description: string,
        path: string
    },
    isReverse?: boolean,
}

const props = defineProps<Props>()


</script>

<template>
    <div class="about-item" :class="{ reverse: isReverse }">
        <img class="about-item-img" :src="itemInfo.path" :alt="itemInfo.title" loading="lazy">
        <div class="about-item-text-are">
            <h3 class="about-item-title">
                {{ itemInfo.title }}
            </h3>
            <p class="about-item-description">
                {{ itemInfo.description }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.about-item {
    display: flex;
    gap: 40px;

    &.reverse {
        flex-direction: row-reverse;
    }
}

.about-item-img {
    width: 550px;
    height: 274px;
}

.about-item-title,
.about-item-description {
    text-align: left;
}
</style>