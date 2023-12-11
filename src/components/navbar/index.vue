<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img class="logo" :src="logo" />
      </a>
      <button @click="openMenu" class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{'show': isShow}">
        <ul class="navbar-nav mb-lg-0 align-items-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about-us">Contact us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/terms">Terms & Conditions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/privacy">Privacy Policy</a>
          </li>
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
      if (window.innerWidth <= 525) {
        this.isShow = !this.isShow;
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/public/scss/components/navbar.scss";
</style>
  