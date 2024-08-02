<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import KeyVisualSlideShow from '@/components/KeyVisualSlideShow.vue'
import AboutContainer from '@/components/about/AboutContainer.vue';
import MembersContainer from '@/components/members/MembersContainer.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import ContactContainer from '@/components/ContactContainer.vue';

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
        <SectionContainer>
            <ContactContainer />
        </SectionContainer>
    </DefaultLayout>
</template>