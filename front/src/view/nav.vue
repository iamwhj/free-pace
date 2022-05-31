<template>
  <div class="nav">
    <div class="nav-box">
      <div class="menu-icon" @click="openMenu = true">
        <svg
          t="1653876628725"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2180"
          width="100%"
          height="100%"
        >
          <path
            d="M332.3904 813.4656h545.1776c17.8176 0 31.3344-13.312 31.3344-31.3344s-13.312-31.3344-31.3344-31.3344H332.3904c-17.8176 0-31.3344 13.312-31.3344 31.3344 0 13.312 13.5168 31.3344 31.3344 31.3344z m0-268.288h545.1776c22.3232 0 35.84-13.312 35.84-31.3344s-13.312-31.3344-31.3344-31.3344H332.3904c-17.8176-4.5056-31.3344 9.0112-31.3344 31.3344 0 18.0224 13.5168 31.3344 31.3344 31.3344z m0-263.5776h545.1776c22.3232 0 35.84-17.8176 35.84-35.84 0-17.8176-13.312-31.3344-31.3344-31.3344H332.3904c-17.8176 0-31.3344 13.312-31.3344 31.3344 0 17.8176 13.5168 35.84 31.3344 35.84zM158.1056 826.7776c26.8288 0 49.152-22.3232 49.152-49.152s-22.3232-49.152-49.152-49.152-49.152 22.3232-49.152 49.152 22.3232 49.152 49.152 49.152z m49.152-312.9344c0-26.8288-22.3232-49.152-49.152-49.152-26.8288-4.5056-49.152 17.8176-49.152 49.152 0 26.8288 22.3232 49.152 49.152 49.152s49.152-22.3232 49.152-49.152zM158.1056 294.912c26.8288 0 49.152-22.3232 49.152-49.152s-22.3232-49.152-49.152-49.152-49.152 22.3232-49.152 49.152 22.3232 49.152 49.152 49.152z m0 0"
            p-id="2181"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <el-drawer v-model="openMenu" direction="ltr" :show-close="false" size="43%">
    <template #header>
      <el-icon :size="18"><Sunny /></el-icon>
      <h2>Menu Navigator</h2>
    </template>
    <el-menu :default-active="currentRoute" router @select="changeRoute">
      <el-menu-item v-for="route in menuList" :index="route.path">
        <span>{{ route.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { Sunny } from '@element-plus/icons-vue';

// menu list
const menuList = [
  { name: '白驹过隙', path: '/home' },
  { name: '环游记', path: '/travel' },
  { name: '碎碎念', path: '/meditation' },
];

// drawer
const openMenu = ref(false);

const currentRoute = ref(menuList[0].path);
const changeRoute = (r) => {
  currentRoute.value = r
}
</script>

<style lang="scss" scoped>
.nav {
  box-sizing: border-box;
  padding: 0.1rem;
  height: 0.7rem;
  .nav-box {
    .menu-icon {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>
