<script setup lang="ts">

</script>

<template>

</template>

<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.members-card-modal {
    background: white;
    padding: 20px;
    border-radius: 16px;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.members-card-modal-wrapper {
    text-align: left;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: $primary-color;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 16px;
        height: 2px;
        background-color: white;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
}

.skill-list {
    padding: 0 20px;
}

.members-name {
    font-weight: bold;
    font-size: 32px;
}

.members-sub-name,
.members-card-sub-title {
    font-size: 20px;
}

.members-sub-name {
    margin-top: 0;
}

.members-name,
.members-sub-name,
.members-card-sub-title {
    color: $primary-color;
}
</style>