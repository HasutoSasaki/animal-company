<script setup lang="ts">
const navList = [
    {
        name: 'ABOUT',
        path: '/about',
    },
    {
        name: 'MEMBERS',
        path: '/members',
    },
    {
        name: 'COMPANY',
        path: '/company',
    },
    {
        name: 'CONTACT',
        path: '/contact',
    }

]

</script>
<template>
    <header class="header">
        <div class="header-container">
            <h1 class="header-title">
                <img class="header-icon" src="@/assets/images/icon.svg" alt="">
                どうぶつパワーシステムズ
            </h1>
            <ul class="header-nav">
                <li class="header-nav-item" v-for="(item, index) in navList" :key="index">
                    <router-link class="header-nav-link" :to="item.path">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    height: 100px;
}

.header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}


.header-title {
    color: $primary-color;
    display: flex;
    align-items: center;
    /* 子要素を上下中央に揃える */
    justify-content: center;
    /* 必要に応じて、子要素を水平方向に中央揃えする */
}

.header-icon {
    margin-right: 10px;
}

.header-nav {
    display: flex;
    gap: 24px;
    list-style: none;
}

.header-nav-link {
    font-size: 16px;
}
</style>