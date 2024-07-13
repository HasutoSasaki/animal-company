<script setup lang='ts'>
interface Props {
    label: string;
    placeholder: string;
}
const props = defineProps<Props>();
</script>

<template>
    <label class="label" for="">{{ props.label }}</label>
    <textarea class="textarea" name="" id="" :placeholder="props.placeholder"></textarea>
</template>

<style scoped lang='scss'>
.label {
    font-weight: bold;
}

.textarea {
    border-radius: 8px;
    width: 100%;
    padding: 8px;
    height: 100px;
}
</style>