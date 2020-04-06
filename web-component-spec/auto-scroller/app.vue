<template>
    <div>
        <AutoScroller :data="bubbles" :interval="2000">
            <span slot-scope="props">{{ props.item.text }}</span>
        </AutoScroller>

        <AutoScroller :data="bubbles" :interval="1000" :horizontal="true">
            <span slot-scope="props" style="padding: 0 10px">{{ props.item.text }}</span>
        </AutoScroller>
    </div>
</template>

<script>
import AutoScroller from './auto-scroller';
export default {
    components: {
        AutoScroller
    },
    data () {
        return {
            bubbles: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }, { text: 'e' }]
        }
    }
}
</script>
