<script setup lang='ts'>
interface Props {
    label: string;
    placeholder: string;
    modelValue: string;
}
const props = defineProps<Props>();


//emitsの型定義について
//https://ja.vuejs.org/guide/typescript/composition-api.html#typing-component-emits
interface Emits {
    (event: 'update:modelValue', value: string): void;
}

const emit = defineEmits<Emits>();

const changeInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
}

</script>

<template>
    <label class="label" for="">{{ props.label }}</label>
    <input class="input" @input="changeInput" type="text" :placeholder="props.placeholder" :value="props.modelValue">
</template>

<style scoped lang='scss'>
.label {
    display: block;
    font-weight: bold;
}

.input {
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #000;
}
</style>