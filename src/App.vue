<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 <nav>
  <ul>
    <li>
      <RouterLink to="/">Hem</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">Om</RouterLink>
    </li>
    <li>
      <RouterLink to="/about/richard">Om Richard</RouterLink>
    </li>


  </ul>
</nav>
<main>
  <RouterView />
</main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
