<template>
    <div class="container">
        <h5>{{ dataDetails.name }}</h5>
        <p v-html="dataDetails.content"></p>
    </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
export default {
    data() {
        return {
            dataDetails: {}
        }
    },
    created() {
        this.handleInitData()
    },
    methods: {
        async handleInitData() {
            try {
                const params = this.$route.params.id
                const parts = params.split('-');
                // Lấy phần tử cuối cùng của mảng parts
                const id = parts[parts.length - 1];
                let res = await HomeService.getNewsDetails(id);
                console.log(res)
                if (res.code == 200) {
                    this.dataDetails = res.data
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>