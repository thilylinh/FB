<template>
    <button :class="`button button__${type} ${className !== '' ? ` ${className}` : ''} ${isDisable ? 'disabled' : ''}`"
        @click="onChangeButton()" :disabled="isLoading || isDisable">
        {{ getTranslatedText(text) }}
        <Loading v-if="isLoading" :isLoadingPage="false" />
    </button>
</template>
<script>
import Loading from '@/components/common/loading/loading.vue'
import languageMixins from '@/mixins/language-mixins'

export default {
    mixins: [languageMixins],
    components: { Loading },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        className: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    methods: {
        onChangeButton() {
            this.$emit('action')
        },
    },
}
</script>

<style lang="scss">
@import "@/public/scss/common/_button.scss";
</style>
