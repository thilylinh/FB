<template>
    <div class="details">
        <Loading v-if="isLoading" />
        <div v-else>
            <h5>{{ dataDetails.name }}</h5>
            <p v-html="dataDetails.content"></p>
        </div>
    </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
import Loading from '@/components/common/loading/loading.vue'
import { useHead } from '@vueuse/head'

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
                if (res.code == 200) {
                    this.dataDetails = res.data
                    useHead({
                        meta: [
                            {
                                property: "og:title",
                                content: res.data.name,
                            },
                        ],

                    })
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
    max-width: 768px;
    margin: 50px auto;
    font-size: 16px;

    .image {
        width: 100%;
        height: auto;

        img {
            width: 100%;
            height: auto;
        }
    }
}

img {
    width: 100%;
    height: auto;
}

@media (max-width: 525px) {
    .details {
        max-width: unset;
        padding: 0 10px;
    }
}
</style>