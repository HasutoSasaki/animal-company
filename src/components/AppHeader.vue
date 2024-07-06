<script setup lang="ts">
const navList = [
    {
        name: 'About',
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
            <h1 class="header-title">Header</h1>
            <ul class="header-nav">
                <li class="header-nav-item" v-for="(item, index) in navList" :key="index">
                    <router-link :to="item.path">
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
}


.header-title {
    color: $primary-color;
}

.header-nav {
    display: flex;
    gap: 24px;
    list-style: none;
}
</style>