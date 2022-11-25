<template>
<div class="">
    <TheNavigation />
    <slot/>
    <TheFooter />
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
h2 {
    font-size: 22px;
}
</style>
