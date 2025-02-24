<template lang="">
  <div>
    <ul>
      <li id="logo">
        <router-link to="/">Throughlens</router-link>
      </li>
      <li>
        <router-link to="/favorites">Favorite</router-link>
      </li>
      <li>
        <router-link class="active" to="/">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0rem;
  overflow: hidden;
  background-color: #000000;
}

#logo {
  font-weight: 800;
  text-decoration: underline 0.3rem;
  margin-left: 1rem;
  float: left;
  color: #00ffff;
}
#logo:hover {
  color: #cfc212;
}

li {
  margin-right: 1rem;
  float: right;
}
li:hover {
  background-color: #1d1d1d;
  text-decoration: underline 0.1rem;
  color: #cfc212;
}
li a {
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 480px) {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0rem;
    overflow: hidden;
    background-color: #000000;
  }
  #logo {
    font-size: 0.9rem;
    margin-left: 0;
    float: left;
    text-decoration: none;
  }
  li {
    margin-right: 0rem;
    float: right;
    font-size: 0.9rem;
  }
}
</style>
