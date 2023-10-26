<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { ElConfigProvider } from 'element-plus'
import menuList from './config/ menu';
</script>

<template>
    <ElConfigProvider>
        <section class="component-of-left-menu">
            <el-menu class="el-menu-vertical-demo">
                <el-menu-item v-for="item in menuList" :index="item.index">
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </el-menu>
        </section>
        <!-- <header>
                          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
                    
                          <div class="wrapper">
                            <HelloWorld msg="You did it!" />
                    
                            <nav>
                              <RouterLink to="/">Home</RouterLink>
                              <RouterLink to="/about">About</RouterLink>
                              <el-button>我是 ElButton</el-button>
                            </nav>
                          </div>
                        </header> -->
    
        <RouterView />
    </ElConfigProvider>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    .logo {
        margin: 0 2rem 0 0;
    }
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
