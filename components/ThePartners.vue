<template>
  <div class="partners-section relative">
     <div class="image-bg">
        <img src="@/assets/img/wood3.png" alt="">
    </div>
    <div class="container">
        <div class="separator-sec flex items-center mt-4 mb-4">
            <img class="mr-2" src="@/assets/img/object-green.png" alt="">
            <div class="border-effect"></div>
        </div>
        <h2 class="mb-8 text-center">Spolupracujeme</h2>
        <div class="logo-box grid grid-cols-6">
            <div class="col-start-2 col-span-4">
                <div class="grid grid-cols-4">
                 <a to="https://www.bazenrk.cz/" target="_blank">
                    <img src="@/assets/img/logos/logo1.png" alt="">
                 </a>
                <a to="https://www.ceskehory.cz/ubytovani/penzion-severka-rokytnice-v-orlickych-horach.html" target="_blank">
                    <img src="@/assets/img/logos/ceskehory.png" alt="">
                </a>
                <a to="https://www.megaubytko.cz/" target="_blank">
                    <img src="@/assets/img/logos/megaubytko.png" alt="">
                 </a>
                 <a to="https://www.e-chalupy.cz/orlicke_hory/ubytovani-rokytnice-v-orlickych-horach-penzion-severka-1894.php" target="_blank">
                    <img src="@/assets/img/logos/e-chalupy.png" alt="">
                 </a>
                 <a to="https://www.outdoor-sport.cz/" target="_blank">
                    <img src="@/assets/img/logos/outdoorsport.png" alt="">
                 </a>
                <a to="https://skiricky.cz/" target="_blank">
                    <img src="@/assets/img/logos/skiricky.png" alt="">
                </a>
                <a to="https://www.rokytnicevoh.cz/" target="_blank">
                    <img src="@/assets/img/logos/mesto-rokytnice.png" alt="">
                 </a>
                 <a to="https://farmapodlipou.cz/" target="_blank">
                    <img src="@/assets/img/logos/farmapodlipou.png" alt="">
                 </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';


export default defineComponent({
    components: {
        Splide, 
        SplideSlide, 
        SplideTrack
    },
    setup() {
         const options = {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            perPage: 3,
            // autoScroll: {
            //     speed: 1,
            // },
            gap    : '1rem',
        }
        return {
            options
        }
    }
})
</script>

<style lang="scss" scoped>
.image-bg {
    position: absolute;
    left: -160px;
    top: 148px;
    width: 520px;
    z-index: 2;
    opacity: 1;
    transform: rotate(-90deg);
}

.partners-section {
    padding-top: 64px;
    padding-bottom: 64px;

    .logo-box {

        a {
            border-top: 0px;
            border-bottom: solid 1px #d0d0d0;
            border-right: solid 1px #d0d0d0;
            padding: 16px;
            transition: all ease .4s;
            background: white;

            &:last-child {
                border-right: 0px;
                border-bottom: solid 1px #d0d0d0;
            }

            &:nth-child(4) {
                border-right: 0px;
            }

            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8) {
                border-bottom: 0px;
            }

            &:hover {
                transition: all ease .4s;
                transform: scale(1.2);
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                border: none;
            }
        }
    }
}

.separator-sec {
    justify-content: center;
}

</style>