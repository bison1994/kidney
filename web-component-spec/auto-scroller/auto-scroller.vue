<template>
    <div class="v-auto-scroller-holder" v-if="data.length" :direction="horizontal ? 'horizontal' : 'vertical'">
        <transition-group name="scroll" tag="ul">
            <li v-for="(index, i) in list" :key="index">
                <slot :item="data[offsets[i]]" />
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'AutoScroller',
    props: {
        data: {
            type: Array,
            required: true
        },
        displayItemsCount: {
            type: Number,
            default: 3
        },
        interval: {
            type: Number,
            default: 2000
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        reverse: {
            type: Boolean,
            default: false
        },
        horizontal: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            list: [],
            offsets: [],
            next: 0,
            timer: 0
        }
    },
    created () {
        const length = this.data.length;
        this.list = Array(this.displayItemsCount).fill().map((_, i) => i);
        this.offsets = Array(length).fill().map((_, i) => i);
        this.next = length;
    },
    mounted () {
        if (this.data.length > this.displayItemsCount && this.autoplay) {
            this.play();
        }
    },
    methods: {
        _scrollTo () {
            this.list.shift()
            this.list.push(this.next++)
            const out = this.offsets.shift()
            this.offsets.push(out)
        },
        _scrollBack () {
            this.list.pop()
            this.list.unshift(this.next++)
            const out = this.offsets.pop()
            this.offsets.unshift(out)
        },
        play () {
            this.timer = setInterval(this.reverse ? this._scrollBack : this._scrollTo, this.interval);
        },
        stop () {
            clearInterval(this.timer);
        }
    }
}
</script>

<style scoped>
    li {
        transition: all 1s linear;
        display: block;
        backface-visibility: hidden;
    }
    .v-auto-scroller-holder[direction="horizontal"] ul {
        display: flex;
    }
    .scroll-enter {
        opacity: 0;
        transform: translateY(100%);
    }
    .scroll-leave-to {
        opacity: 0;
        transform: translateY(-100%);
    }
    .v-auto-scroller-holder[direction="horizontal"] .scroll-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-auto-scroller-holder[direction="horizontal"] .scroll-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }
    .scroll-leave-active {
        position: absolute;
    }
</style>
