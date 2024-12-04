<script setup>
import { onMounted } from 'vue';
import { useUserStore } from './stores/user';

const userStore = useUserStore();

onMounted(() => {
    userStore.deleteUserData();
});
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
