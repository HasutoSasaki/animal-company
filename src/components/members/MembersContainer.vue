<script setup lang="ts">


</script>

<template>

</template>

<style lang="scss" scoped>
.members-title {
    color: white;
}

.members-container {
    background-color: $primary-color;
    height: fit-content;
    text-align: center;
}

.members-card-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 32px;
    max-width: 1000px;
    margin-inline: auto;
}
</style>