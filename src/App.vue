<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/navbar/index.vue';
import Footer from '@/components/footer/index.vue';
export default {
    components: { Header, Footer },
}
</script>
<style lang="scss" scoped>
@import '@/public/scss/main.scss';
</style>
