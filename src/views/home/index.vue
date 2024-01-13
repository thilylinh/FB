<template>
  <div class="home">
    <Loading v-if="isLoading" />
    <template v-else>
      <div class="banner-container">
        <div class="banner-item banner-custom">
          <div class="banner">
            <img class="banner--image" decoding="async" fetchpriority="high"
              sizes="(max-width: 600px) 480px, (max-width: 800px) 720px, 1200px"
              src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/travel2-600x600.jpg"
              alt="anh 1" loading="lazy" />
            <div class="banner--infor">
              <h4>Name</h4>
              <p>Was this the worst night in discoures fashion history?</p>
              <span class="back-date">
                <i class="bi bi-calendar"></i>
                September 20, 2022</span>
            </div>
          </div>
        </div>
        <div class="banner-item">
          <div class="row">
            <div class="banner">
              <img class="banner--image" decoding="async" fetchpriority="high"
                sizes="(max-width: 600px) 480px, (max-width: 800px) 720px, 1200px"
                src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/tavel4-1024x576.jpg"
                alt="anh 2" loading="lazy" />
              <div class="banner--infor">
                <h4>Name</h4>
                <p>Was this the worst night in discoures fashion history?</p>
                <span class="back-date">
                  <i class="bi bi-calendar"></i>
                  September 20, 2022</span>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="banner">
              <img class="banner--image" decoding="async" fetchpriority="high"
                sizes="(max-width: 600px) 480px, (max-width: 800px) 720px, 1200px"
                src="https://backtheme.tech/products/wordpress/neoton/wp-content/uploads/2022/09/travel3.jpg" alt="anh 3"
                loading="lazy" />
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

      <div class="home-news-section" v-for="(item, index) in news" :key="index">
        <h4 class="title">
          {{ item.groupName }}
          <span class="watermark"></span>
        </h4>
        <div class="content">
          <div class="content--item" v-for="(detail, idx) in item.detail" :key="idx">
            <div class="card">
              <img class="card-img-top" decoding="async" fetchpriority="high"
                :src="detail.avatarLink?.replace(/\\/g, '/')" :alt="detail.name" loading="lazy" />
              <div class="card-body">
                <h5>{{ detail.name }}</h5>
                <p class="card-text">{{ renderDate(detail.dateTimeStart) }}</p>
                <button class="btn-primary" @click="handleShowDetails(detail.id)">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
import utilsMixins from "@/mixins/function-utils";
import Loading from '@/components/common/loading/loading.vue'
export default {
  mixins: [utilsMixins],
  components: { Loading },
  data() {
    return {
      isLoading: false,
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
        this.isLoading = true;
        let res = await HomeService.getListNews();
        if (res.code == 200) {
          this.news = res.data
        }
        this.isLoading = false;
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
