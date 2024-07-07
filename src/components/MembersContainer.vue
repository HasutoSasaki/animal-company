<script setup lang="ts">
import kirinImagePath from '@/assets/images/member/kirin.png'
import elephantImagePath from '@/assets/images/member/elephant.png'
import buffaloImagePath from '@/assets/images/member/buffalo.png'
import mouseImagePath from '@/assets/images/member/mouse.png'
import penguinImagePath from '@/assets/images/member/penguin.png'
import grandpaImagePath from '@/assets/images/member/grandpa.png'

import MembersCard from './MembersCard.vue'

const membersList = [
    {
        name: 'キリンさん',
        nameSub: 'kirin san',
        business: 'engineer',
        imagePath: kirinImagePath
    },
    {
        name: '象山 象太郎',
        nameSub: 'zoyama zotaro',
        business: 'engineer',
        imagePath: elephantImagePath
    },
    {
        name: 'バッファロー中村',
        nameSub: 'buffalo nakamura',
        business: 'engineer',
        imagePath: buffaloImagePath
    },
    {
        name: '鳥',
        nameSub: 'bird',
        business: 'designer',
        imagePath: penguinImagePath
    },
    {
        name: 'ハダカデバネズ美',
        nameSub: 'hadakadebanezu-mi',
        business: 'designer',
        imagePath: mouseImagePath
    },
    {
        name: '山本さん',
        nameSub: 'yamamoto',
        business: 'product manager',
        imagePath: grandpaImagePath
    }
]
</script>

<template>
    <div class="members-container">
        <h1 class="members-title">
            MEMBERS
        </h1>
        <ul class="members-card-list">
            <li v-for="(item, index) in membersList" :key="index">
                <MembersCard :cardInfo="item" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.members-title {
    color: white;
}

.members-container {
    background-color: $primary-color;
    height: 984px;
    text-align: center;
}

.members-card-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 32px;
    max-width: 1000px;
    margin-inline: auto;
}
</style>