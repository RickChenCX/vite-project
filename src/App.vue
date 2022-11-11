<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/">todo页面</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
