<template>
  <nav class="navbar">
    <div class="container">
      <div class="header-item">
        <img class="logo" :src="logo" alt="logo" />
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
      logo: require("@/public/images/logo.png")
    }
  },
  methods: {
    openMenu() {
      // if (window.innerWidth <= 525) {
      //   this.isShow = !this.isShow;
      // }
      const navList = document.getElementById('navList');
      navList.classList.toggle('show')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/public/scss/components/navbar.scss";
</style>
  