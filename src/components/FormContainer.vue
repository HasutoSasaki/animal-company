<script setup lang='ts'>
import { computed, ref } from 'vue'
import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';

const name = ref<string>('');
const furigana = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const content = ref<string>('');

//computedで全て入力されているかを返す
const allInputsValid = computed(() => {

    // return Object.values(inputs).every((input) => input.value.trim() !== '');
});


const submit = async () => {

    console.log('name:', name.value);
    console.log('furigana:', furigana.value);
    console.log('email:', email.value);
    console.log('phone:', phone.value);
    console.log('content:', content.value);
}

</script>

<template>
    <div class="form-container">
        <FormInput v-model="name" label="お名前" placeholder="田中太郎" />
        <FormInput v-model="furigana" label="フリガナ" placeholder="タナカタロウ" />
        <FormInput v-model="email" label="メールアドレス" placeholder="tanaka@taromail.jp" />
        <FormInput v-model="phone" label="お電話番号" placeholder="08012341234" />
        <FormTextarea v-model="content" label="お問い合わせ内容" placeholder="こちらに要件をお書きください" />
        <CommonButton class="submit-button" @click="submit" text="送信" :isActive="allInputsValid" />
    </div>
</template>

<style scoped lang='scss'>
.form-container {
    width: 800px;
    margin-inline: auto;
    display: flex;
    //縦に並べたい
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
}

.submit-button {
    margin-left: auto;
}
</style>