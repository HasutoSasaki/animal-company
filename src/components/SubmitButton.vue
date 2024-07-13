<script setup lang='ts'>
//propsの型定義
interface Props {
    text: string;
    isActive?: boolean;
}
const props = defineProps<Props>();

//emitの型定義
interface Emits {
    (event: 'click'): void;
}
const emit = defineEmits<Emits>();

const clickHandler = (): void => {
    // emitイベントを発火する
    emit('click');
}

</script>

<template>
    <button @click="clickHandler" class="common-button" :disabled="!props.isActive">{{ props.text }}</button>
</template>

<style scoped lang='scss'>
.common-button {
    padding: 8px 40px;
    background-color: $primary-color;
    border-radius: 8px;
    font-weight: bold;
    color: #fff;
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
}
</style>