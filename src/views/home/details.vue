<template>
    <div class="details mt-5">
        <Loading v-if="isLoading" />
        <div v-else class="container">
            <h5>{{ dataDetails.name }}</h5>
            <p v-html="dataDetails.content"></p>
        </div>
    </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
import Loading from '@/components/common/loading/loading.vue'
export default {
    components: { Loading },
    data() {
        return {
            isLoading: false,
            dataDetails: {}
        }
    },
    created() {
        this.handleInitData()
    },
    methods: {
        async handleInitData() {
            try {
                this.isLoading = true;
                const params = this.$route.params.id
                const parts = params.split('-');
                // Lấy phần tử cuối cùng của mảng parts
                const id = parts[parts.length - 1];
                let res = await HomeService.getNewsDetails(id);
                console.log(res)
                if (res.code == 200) {
                    this.dataDetails = res.data
                    this.isLoading = false;
                }
            } catch (error) {
                this.isLoading = false;
                console.log(error)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.details {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 768px;
    margin: 0 auto;
}

img {
    width: 100%;
}


@media (max-width: 525px) {
    .details {
        max-width: unset;
    }

}
</style>