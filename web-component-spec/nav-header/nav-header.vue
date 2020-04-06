<template>
    <div class="v-nav-header-holder">
        <div class="v-nav-header-background" :style="backgroundStyle"></div>
        <div class="v-nav-header-container">
            <div class="v-nav-header-left" @click="goBack">
                <slot name="left">
                    <v-icon-angle />
                </slot>
            </div>
            <div class="v-nav-header-center">
                <slot></slot>
            </div>
            <div class="v-nav-header-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import vIconAngle from '../icons/icon-angle';

export default {
    name: 'NavHeader',
    props: {
        'background-style': {
            type: Object,
            default: () => {}
        }
    },
    components: {
        vIconAngle
    },
    methods: {
        goBack () {}
    }
};
</script>

<style scoped="true">
    .v-nav-header-holder {
        width: 100%;
        height: 45px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        box-sizing: border-box;
    }
    .v-nav-header-background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        background-color: #ccc;
    }
    .v-nav-header-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .v-nav-header-container > div {
        height: 100%;
    }
    .v-nav-header-center {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        bottom: 0;
        left: 0;
        z-index: 0;
    }
    .v-nav-header-left,
    .v-nav-header-right {
        position: relative;
        z-index: 1;
    }
    .v-nav-header-left {
        width: 45px;
        display: flex;
        align-items: center;
    }
</style>
