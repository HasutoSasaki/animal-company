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
            <CommonLogo logo-color="blue" />
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
.header {}

.header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: 100px;

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