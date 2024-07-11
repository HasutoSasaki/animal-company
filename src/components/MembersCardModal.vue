<script setup lang="ts">
interface Props {
    itemInfo: {
        imagePath: string,
        business: string,
        name: string,
        subName: string,
        skills: Array<string>,
        comment: string
    }
}

const props = defineProps<Props>()
</script>

<template>

    <div class="members-card-modal">
        <img :src="itemInfo.imagePath" alt="">
        <p> {{ itemInfo.business }}</p>
        <h2>{{ itemInfo.name }}</h2>
        <p>{{ itemInfo.subName }}</p>
        <h3>
            スキル
        </h3>
        <ul>
            <li></li>
        </ul>
        <h3>ひとこと</h3>
        <p>
            {{ itemInfo.comment }}
        </p>

    </div>
</template>