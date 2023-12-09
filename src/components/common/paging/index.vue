<template>
    <div class="pagination-container">
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                <span class="page-link" @click="handlePrevious">{{ getTranslatedText('previous') }}</span>
            </li>
            <li class="page-item" v-if="currentPage > 3">
                <span class="page-link" @click="changePage(1)">{{ formattedPageNumber(1) }}</span>
            </li>
            <li class="page-item" v-if="currentPage > 4">
                <span class="page-link">...</span>
            </li>
            <li class="page-item" v-for="pageNumber in pages" :key="pageNumber"
                :class="{ 'active': pageNumber === currentPage }">
                <span class="page-link" @click="changePage(pageNumber)">{{ formattedPageNumber(pageNumber) }}</span>
            </li>
            <li class="page-item" v-if="currentPage < totalPages - 3">
                <span class="page-link">...</span>
            </li>
            <li class="page-item" v-if="currentPage < totalPages - 2">
                <span class="page-link" @click="changePage(totalPages)">{{ formattedPageNumber(totalPages) }}</span>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                <span class="page-link" @click="handleNextPage">{{ getTranslatedText('next') }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import EventBus from '@/utils/EventBus';
import languageMixins from "@/mixins/language-mixins";
export default {
    mixins: [languageMixins],
    props: {
        paginator: {},
        itemsPerPage: {
            type: Number,
        }
    },
    data() {
        return {
            pages: [],
            totalPages: 1,
            currentPage: 1,
        };
    },
    created() {
        this.handlePaging();
    },
    methods: {
        handlePaging() {
            this.pages = []
            this.totalPages = this.paginator.total_pages;
            this.currentPage = this.paginator.current_page
            if (this.totalPages > 0) {
                const minPage = Math.max(1, this.currentPage - 2);
                const maxPage = Math.min(this.totalPages, this.currentPage + 2);
                for (let i = minPage; i <= maxPage; i++) {
                    this.pages.push(i);
                }
            }
        },
        changePage(page) {
            EventBus.emit('change-page', page)
        },
        handlePrevious() {
            if (this.currentPage > 1) {
                this.changePage(this.currentPage - 1)
            }
        },
        handleNextPage() {
            if (this.currentPage < this.totalPages) {
                this.changePage(this.currentPage + 1)
            }
        },
        formattedPageNumber(page) {
            return page < 10 ? '0' + page : page;
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/public/scss/common/paging/index.scss";
</style>