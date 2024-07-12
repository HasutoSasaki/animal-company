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
        imagePath: kirinImagePath,
        skills: ['C言語', 'Ruby'],
        comment: '首を長くして待ってます！'
    },
    {
        name: '象山 象太郎',
        nameSub: 'zoyama zotaro',
        business: 'engineer',
        imagePath: elephantImagePath,
        skills: ['Java', 'Swift'],
        comment: 'どっしり構えてがんばります。'

    },
    {
        name: 'バッファロー中村',
        nameSub: 'buffalo nakamura',
        business: 'engineer',
        imagePath: buffaloImagePath,
        skills: ['HTML/CSS', 'Javascript', 'Vue.js'],
        comment: '猪突猛進に日々精進'
    },
    {
        name: '鳥',
        nameSub: 'bird',
        business: 'designer',
        imagePath: penguinImagePath,
        skills: ['figma', '各種Adobeツール'],
        comment: '業界のファーストペンギンを目指して日々勉強中です'
    },
    {
        name: 'ハダカデバネズ美',
        nameSub: 'hadakadebanezu-mi',
        business: 'designer',
        imagePath: mouseImagePath,
        skills: ['figma'],
        comment: 'デザインに命かけてます！'
    },
    {
        name: '山本さん',
        nameSub: 'yamamoto',
        business: 'product manager',
        imagePath: grandpaImagePath,
        skills: ['マーケティング', 'ユーザーリサーチ'],
        comment: '人生経験豊富です'
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
    height: fit-content;
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