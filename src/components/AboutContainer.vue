<script setup lang="ts">
import AboutItem from './AboutItem.vue';
import aboutImage1 from '@/assets/images/aboutSection/image1.png';
import aboutImage2 from '@/assets/images/aboutSection/image2.png';
import aboutImage3 from '@/assets/images/aboutSection/image3.png';
import CommonTitle from './CommonTitle.vue';
const aboutList = [
    {
        title: '技術と創造の森へようこそ！',
        description: 'どうぶつパワーシステムズは、エンジニアとデザイナーの人材派遣に特化した企業です。私たちは、技術の森を探検する冒険心あふれるエンジニアと、創造の翼を広げるデザイナーをお届けします。まるで動物たちが楽しく協力し合うように、プロフェッショナルなチームがあなたのプロジェクトをサポートします。',
        path: aboutImage1,
    },
    {
        title: '個性溢れるメンバーたち。',
        description: 'フクロウのような知識豊富なエンジニア、カラフルな鳥のようなクリエイティブなデザイナーたちが、あなたのビジネスに新しい風を吹き込みます。私たちは、ウサギのような迅速さで対応し、パンダのような優しさで信頼を築きます。',
        path: aboutImage2,
    },
    {
        title: '未来を切り開く。',
        description: 'どうぶつパワーシステムズは、あなたのプロジェクトを成功に導くために、柔軟で高品質な人材派遣サービスを提供します。自然の中で力を合わせて成長する動物たちのように、私たちと一緒に未来を切り開きましょう！',
        path: aboutImage3,
    }
]
</script>

<template>
    <div class="about-container">
        <CommonTitle title="ABOUT" color="blue" />
        <ul class="about-list">
            <li v-for="(item, index) in aboutList">
                <AboutItem :itemInfo="item" :isReverse="index % 2 !== 0" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.about-container {
    text-align: center;
}

.about-title {
    color: $primary-color;
    font-size: 40px;

}

.about-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 160px;
    max-width: 1000px;
    margin-inline: auto;
}
</style>