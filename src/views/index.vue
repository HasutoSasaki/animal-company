<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import KeyVisualSlideShow from '@/components/KeyVisualSlideShow.vue'
import AboutContainer from '@/components/AboutContainer.vue';
import MembersContainer from '@/components/MembersContainer.vue';
</script>


<template>
    <DefaultLayout>
        <div>
            <KeyVisualSlideShow />
        </div>
        <div>
            <AboutContainer />
        </div>
        <div>
            <MembersContainer />
        </div>
    </DefaultLayout>
</template>