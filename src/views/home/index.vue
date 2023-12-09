<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="banner">
          <img class="banner--image"
            src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/travel2-600x600.jpg" />
          <div class="banner--infor">
            <h4>Name</h4>
            <p>Was this the worst night in discoures fashion history?</p>
            <span class="back-date">
              <i class="bi bi-calendar"></i>
              September 20, 2022</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="banner">
            <img class="banner--image"
              src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/tavel4-1024x576.jpg" />
            <div class="banner--infor">
              <h4>Name</h4>
              <p>Was this the worst night in discoures fashion history?</p>
              <span class="back-date">
                <i class="bi bi-calendar"></i>
                September 20, 2022</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="banner">
            <img class="banner--image"
              src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/travel3.jpg" />
            <div class="banner--infor">
              <h4>Name</h4>
              <p>Was this the worst night in discoures fashion history?</p>
              <span class="back-date">
                <i class="bi bi-calendar"></i>
                September 20, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-news-section mt-5">
      <h4 class="title">
        News
        <span class="watermark"></span>
      </h4>
      <div class="row" v-for="(item, index) in news" :key="index">
        <div class="col-md-4 mb-4" v-for="(detail, idx) in item.detail" :key="idx">
          <div class="card">
            <img class="card-img-top" :src="detail.avatarLink?.replace(/\\/g, '/')" />
            <div class="card-body">
              <h5 class="card-title">{{ item.groupName }}</h5>
              <h6>{{ detail.name }}</h6>
              <p class="card-text">{{ detail.dateTimeStart }}</p>
              <span class="btn btn-primary" @click="handleShowDetails(detail.id)">Read more</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
export default {
  data() {
    return {
      news: [],
      urlLink: process.env.VUE_APP_API_URL
    }
  },
  created() {
    this.fetchNewList();
  },
  methods: {
    async fetchNewList() {
      try {
        let res = await HomeService.getListNews();
        if (res.code == 200) {
          this.news = res.data
        }
      } catch (error) {
        console.log(error)
      }
    },

    handleShowDetails(id) {
      this.$router.push({ path: "/" + id });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/public/scss/home/_index.scss";
</style>
