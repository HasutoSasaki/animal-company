<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from 'vue'
import pandaImagePath from '@/assets/images/slideShow/panda.jpg'
import tigerImagePath from '@/assets/images/slideShow/tiger.jpg'
import foxImagePath from '@/assets/images/slideShow/fox.jpg'
import squirrelImagePath from '@/assets/images/slideShow/squirrel.jpg'

const images = ref([
    {
        key: 'panda',
        path: pandaImagePath,
        alt: 'パンダの写真'
    },
    {
        key: 'tiger',
        path: tigerImagePath,
        alt: '虎の写真'
    },
    {
        key: 'fox',
        path: foxImagePath,
        alt: '狐の写真'
    },
    {
        key: 'squirrel',
        path: squirrelImagePath,
        alt: 'りすの写真'
    },

]);

const startX = ref(0)
const currentX = ref(0)
const isDragging = ref(false)

const currentPosition = computed(() => -currentIndex.value * window.innerWidth);

const currentIndex = ref(0)
//dotsにはimagesの配列からkeyだけを入れたい。
const dots = ref(images.value.map((_, index) => ({
    active: index === currentIndex.value,
    onClick: () => setCurrentIndex(index)
})));

function setCurrentIndex(index: number) {
    currentIndex.value = (index + images.value.length) % images.value.length;
    updateDots();
}
function updateDots() {
    dots.value.forEach((dot, i) => {
        dot.active = i === currentIndex.value;
    });
}

const handleStart = (event: number) => {
    startX.value = event;
    isDragging.value = true;
    console.log('handleStart:', startX.value, currentX.value)
}

const handleMove = (event: number) => {
    if (!isDragging.value) return;
    currentX.value = event;
    console.log('handleMove:', currentX.value)
}

const handleEnd = () => {
    if (!isDragging.value) return;
    const swipeDistance = startX.value - currentX.value;

    if (Math.abs(swipeDistance) > 50) {
        setCurrentIndex(currentIndex.value + (swipeDistance > 0 ? 1 : -1));
    }
    isDragging.value = false;
}

const touchStart = (event: TouchEvent) => handleStart(event.touches[0].clientX);
const touchMove = (event: TouchEvent) => handleMove(event.touches[0].clientX);
const touchEnd = () => handleEnd();

const mouseDown = (event: MouseEvent) => handleStart(event.clientX);
const mouseMove = (event: MouseEvent) => handleMove(event.clientX);
const mouseUp = () => handleEnd();


onMounted(() => {
    console.log('mount')
})


</script>

<template>
    <div class="slide-show" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @mousedown="mouseDown"
        @mousemove="mouseMove" @mouseup="mouseUp" @mouseleave="mouseUp">
        <div class="slide-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="slide" v-for="(image, index) in images" :key="index">
                <img class="slide-show-img" :src="image.path" :alt="image.alt">
            </div>
        </div>
        <div class="dots-container">
            <span v-for="(dot, index) in dots" :key="index" :class="{ active: dot.active }" @click="dot.onClick"></span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slide-show {
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
    cursor: pointer;
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