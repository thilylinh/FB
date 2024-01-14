<template>
    <div class="details">
        <Loading v-if="isLoading" />
        <div v-else>
            <component :is="'script'">
                console.log("Script before h1");
            </component>
            <h1>{{ dataDetails.name }}</h1>
            <component :is="'script'">
                console.log("Script after h1");
            </component>
            <p v-html="dataDetails.content"></p>

            <component :is="'script'">
                console.log("Script afterrrr");
            </component>
        </div>
    </div>
</template>
<script>
import HomeService from "@/services/home/index.service.ts"
import Loading from '@/components/common/loading/loading.vue'
import { useHead } from '@vueuse/head'
import initScriptMinixs from "@/mixins/initScript"

export default {
    mixins: [initScriptMinixs],
    components: { Loading },
    data() {
        return {
            isLoading: false,
            dataDetails: {}
        }
    },
    mounted() {
        //this.loadScript();
    },
    created() {
        this.handleInitData();
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
                    this.initScript();
                }
            } catch (error) {
                this.isLoading = false;
                console.log(error)
            }
        },
        loadScript() {
            const script = document.createElement('script');
            script.innerHTML = `
                console.log("This is dynamic script content!");
            `;
            script.async = true;
            script.onload = () => {
                console.log('External script loaded!');
            };

            const element = document.querySelector('#test');
            console.log('element', element);
            console.log('dio', document)

            // Chèn script trước phần tử có id là 'title-details'
            if (element) {
                element.parentNode.insertBefore(script, element);
            } else {
                console.error('Element with id "title-details" not found.');
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