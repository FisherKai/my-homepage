<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
    loading: {
        default: true,
        type: Boolean
    }
})
</script>

<template>
    <main v-if="loading"> {{loading}} 加载中...</main>
</template>

<style></style>