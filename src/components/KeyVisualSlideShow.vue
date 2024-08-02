<script setup lang="ts">

</script>

<template>

</template>

<style scoped lang="scss">
.slide-show {
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
}

.slide-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.slide {
    min-width: 100%;
    height: 100%;
    overflow: hidden;
}

.slide-show-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    /* 白い幕の半透明 */
    pointer-events: none;
}

.dots-container {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
}

.dots-container span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: gray;
    margin: 0 5px;
    cursor: pointer;
}

.dots-container span.active {
    background: $primary-color;
}
</style>