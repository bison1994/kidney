<template>
    <svg
        class="v-icon-triangle"
        :width="`${10 * zoom}`"
        :height="`${10 * zoom}`"
        :style="{ transform: `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)` }"
        viewBox="0 0 10 10"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polyline
            points="5,1 9,9 1,9 5,1"
            :fill="fillColor"
            :stroke="fillColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
const rotateMap = {
    up: 0,
    right: 90,
    down: 180,
    left: 270
}
export default {
    name: 'IconTriangle',
    props: {
        zoom: {
            type: Number,
            default: 1
        },
        fillColor: {
            type: String,
            default: '#333'
        },
        scaleX: {
            type: Number,
            default: 1
        },
        scaleY: {
            type: Number,
            default: 1
        },
        direction: {
            type: String,
            default: 'up'
        }
    },
    computed: {
        rotate () {
            return rotateMap[this.direction] || 0;
        }
    }
};
</script>
