<script setup>
import Navbar from "./components/Navbar.vue";
import ImageSearch from "./view/ImageSearchView.vue"

</script>

<template>
  <header>
    <Navbar />

  </header>

  <main>
    <router-view />

    <ImageSearch />

  </main>
</template>

<style scoped>
</style>
