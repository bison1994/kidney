<template>
    <svg
        class="v-icon-angle"
        :width="`${9 * zoom}`"
        :height="`${16 * zoom}`"
        :style="{ transform: `rotate(${rotate}deg)` }"
        viewBox="0 0 9 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polyline
            points="8,1 1,8 8,15"
            fill="rgba(0, 0, 0, 0)"
            :stroke="strokeColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
const rotateMap = {
    left: 0,
    up: 90,
    right: 180,
    down: 270
}
export default {
    name: 'IconAngle',
    props: {
        zoom: {
            type: Number,
            default: 1
        },
        'stroke-color': {
            type: String,
            default: '#333'
        },
        'stroke-width': {
            type: Number,
            default: 1.5
        },
        direction: {
            type: String,
            default: 'left'
        }
    },
    computed: {
        rotate () {
            return rotateMap[this.direction] || 0;
        }
    }
};
</script>
