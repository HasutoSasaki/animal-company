<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import KeyVisualSlideShow from '@/components/KeyVisualSlideShow.vue'
import AboutContainer from '@/components/AboutContainer.vue';
import MembersContainer from '@/components/MembersContainer.vue';
import SectionContainer from '@/components/SectionContainer.vue';

</script>


<template>
    <DefaultLayout>
        <KeyVisualSlideShow />
        <SectionContainer>
            <AboutContainer />
        </SectionContainer>
        <SectionContainer bg-color="blue">
            <MembersContainer />
        </SectionContainer>
    </DefaultLayout>
</template>