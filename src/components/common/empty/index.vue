<template>
    <div class="empty">
        <p>{{ description }}</p>
    </div>
</template>
<script>
export default {
    props: {
        description: {
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/public/scss/common/empty/index.scss";
</style>
