<template>
  <div class="about-section relative mt-32 mb-32">
    <div class="image-bg">
        <img src="@/assets/img/wood.png" alt="">
    </div>
    <div class="container">
        <div class="grid grid-cols-2 gap-16 items-center">
            <section class="image">
                <img src="@/assets/img/about.jpg" alt="">
            </section>
            <section class="content">
                <div class="separator-sec flex items-center mt-4 mb-4">
                    <img class="mr-2" src="@/assets/img/object-green.png" alt="">
                    <div class="border-effect"></div>
                </div>
                <h2 class="mb-4">O Pensionu</h2>
                <slot name="content" />
                <slot name="footer" />
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped lang="scss">

.image-bg {
    position: absolute;
    right: 0px;
    bottom: -50px;
    width: 520px;
    z-index: -2;
    opacity: .1;
}

.image {
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    &::after {
        content: '';
        position: absolute;
        width: 40%;
        height: 40%;
        left: -10px;
        top: -10px;
        border-top: solid 2px #84A872;
        border-left: solid 2px #84A872;
    }
    &::before {
        content: '';
        position: absolute;
        width: 40%;
        height: 40%;
        right: -10px;
        bottom: -10px;
        border-bottom: solid 2px #84A872;
        border-right: solid 2px #84A872;
    }
}


</style>