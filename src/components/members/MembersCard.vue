<script setup lang="ts">
import { defineProps } from 'vue';
//props型定義をinterfaceで定義
interface Props {
    cardInfo: {
        name: string;
        nameSub: string;
        business: string;
        imagePath: string;
    };
}
const props = defineProps<Props>();

</script>

<template>
    <div class="members-card">
        <img :src="cardInfo.imagePath" :alt="cardInfo.name" loading="lazy">
        <p>{{ cardInfo.business }}</p>
        <h3 class="members-card-title">{{ cardInfo.name }}</h3>
        <p class="members-card-sub-title">{{ cardInfo.nameSub }}</p>
    </div>
</template>

<style lang="scss" scoped>
.members-card {
    background-color: white;
    border-radius: 10px;
    width: 240px;
    height: 305px;
    text-align: center;
}

.members-card-title {
    font-size: 20px;
    font-weight: bold;
    color: $primary-color;
}

.members-card-sub-title {
    font-size: 15px;
    color: $primary-color
}
</style>