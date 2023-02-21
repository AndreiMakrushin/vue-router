<script setup>
  import {RouterView, RouterLink} from "vue-router"
</script>
<template>
    <main>
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <RouterView />
    </main>
</template>