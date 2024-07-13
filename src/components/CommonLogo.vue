<script setup lang='ts'>
import logoBluePath from '@/assets/images/logo-blue.png';
import logoWhitePath from '@/assets/images/logo-white.png';

interface Props {
    logoColor: 'blue' | 'white';
}
const props = defineProps<Props>()

const getLogoPath = (): string => {
    if (!props.logoColor) return 'no-logo-color'

    if (props.logoColor === 'blue') return logoBluePath

    if (props.logoColor === 'white') return logoWhitePath

    return 'no-logo-color'
}

</script>

<template>
    <p class="common-logo">
        <img class="common-logo-icon" :src="getLogoPath()" alt="会社のロゴ">
    </p>
</template>

<style scoped lang='scss'>
.common-logo {
    color: $primary-color;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.common-logo-icon {
    margin-right: 10px;
}
</style>