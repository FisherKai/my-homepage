<script setup lang="ts">
import router from '@/router';
import menuList from '../../config/ menu';

const selectItem = (index: string) => {
    router.push(index);
}
</script>

<template>
    <section class="component-of-left-menu">
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        class="m-left-menu"
        @select="selectItem"
        >
            <el-menu-item v-for="item in menuList" :index="item.path" :route="item.path">
                <span>{{ item.name }}</span>
            </el-menu-item>
        </el-menu>
    </section>
</template>

<style scoped>
.m-left-menu{
    height: 100%;
}
.component-of-left-menu {
    position: fixed;
    left: 0;
    width: 180px;
    height: 100vh;
}
</style>