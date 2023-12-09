<template>
    <transition name="slide-down">
        <div v-if="showAlert" class="alert-container">
            <div class="alert" :class="alertType">
                <h4>{{ getTranslatedText(alertTitle) }}</h4>
                <p v-if="typeof alertMessage === 'string'">
                    {{ isTranslate ? getTranslatedText(alertMessage) : alertMessage }}
                </p>
                <p v-else-if="Array.isArray(alertMessage)" v-for="(message, index) in alertMessage" :key="index">
                    {{ isTranslate ? getTranslatedText(message) : message }}
                </p>
            </div>
        </div>
    </transition>
</template>
<script>
import languageMixins from '@/mixins/language-mixins'
export default {
    mixins: [languageMixins],
    props: {
        showAlert: {
            type: Boolean,
            default: false,
        },
        alertMessage: {
            type: String,
            default: '',
        },
        alertTitle: {
            type: String,
            default: '',
        },
        alertType: {
            type: String,
            default: 'default',
        },
        isTranslate: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/public/scss/common/alert/index.scss';
</style>
