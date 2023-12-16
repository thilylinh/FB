<template>
  <nav class="navbar">
    <div class="container">
      <div class="header-item">
        <img class="logo" height="29" width="50" :src="logo" alt="logo"
          sizes="(max-width: 600px) 480px, (max-width: 900px) 720px, 960px" :srcset="`${logo} 480w`" />
        <button class="toggle-btn" @click="openMenu">Menu</button>
      </div>
      <div class="menu-container">

        <ul class="nav-list" id="navList">
          <li><a href="/">Home</a></li>
          <li> <a href="/about-us">Contact us</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li> <a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      isShow: false,
      logo: require("@/public/images/logo.jpg")
    }
  },
  methods: {
    openMenu() {
      const navList = document.getElementById('navList');
      navList.classList.toggle('show')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/public/scss/components/navbar.scss";
</style>
  