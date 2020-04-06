<template>
    <div class="v-content-detail" :class="{ overflow: isOverflow }" :status="isShow ? '1' : '0'">
        <span class="v-toggle-handler" @click="toggle">
            <v-angle :zoom="0.5" :stroke-width="2" stroke-color="#ccc" :direction="isShow ? 'up' : 'down'" />
        </span>
    </div>
</template>

<script>
import vAngle from '../icons/icon-angle';

export default {
    props: {
        content: {
            type: String,
            default: ''
        },
        shouldShowAll: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: 50
        }
    },
    components: {
        vAngle
    },
    mounted () {
        this.isShow = this.shouldShowAll;
        this.toggleEl = this.$el.querySelector('.v-toggle-handler');
        this.$el.innerHTML = null;

        this.insertContent();
    },
    data () {
        return {
            isShow: false,
            toggleEl: null
        };
    },
    computed: {
        isOverflow () {
            return this.content.length > this.limit;
        }
    },
    methods: {
        toggle () {
            this.isShow = !this.isShow;
        },
        insertContent () {
            const { content, isOverflow, isShow, limit } = this;

            const text = isOverflow
                ? isShow
                    ? content
                    : content.slice(0, limit) + '...'
                : content;
            this.$el.innerHTML = text.replace(/\n/g, '<br/>');

            this.$el.appendChild(this.toggleEl);
        }
    },
    watch: {
        isShow () {
            this.insertContent();
        }
    }
};
</script>

<style scoped>
    .v-toggle-handler {
        font-size: 13px;
        color: #999;
        margin-left: 5px;
    }
    .v-content-detail.overflow[status='0'] .v-toggle-handler::before {
        content: '展开';
        margin-right: 5px;
    }
    .v-content-detail.overflow[status='1'] .v-toggle-handler::before {
        content: '收起';
        margin-right: 5px;
    }
</style>
