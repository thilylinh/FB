<template>
    <div class="box-loader" :class="{ 'screen-page': isLoadingPage }">
        <span
            :class="[isComponent ? 'component__loader' : 'loader']"
        ></span>
    </div>
</template>
<script>
export default {
    props: {
        isLoadingPage: {
            type: Boolean,
            default: true,
        },
        isComponent: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
@import "@/public/scss/common/_loading.scss";
</style>
