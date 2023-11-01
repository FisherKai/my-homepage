<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import LeftMenu from './components/common/LeftMenu.vue';
</script>

<template>
    <ElConfigProvider>
        <LeftMenu></LeftMenu>    
        <section class="m-container">
            <RouterView />
        </section>
    </ElConfigProvider>
</template>

<style scoped>
.m-container{
    position: fixed;
    right: 0;
    height: 100vh;
    width: calc(100% - 180px);
}
</style>
