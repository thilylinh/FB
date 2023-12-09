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
                let res = await HomeService.getNewsDetails(this.$route.params.id);
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