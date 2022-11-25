<template>
  <div class="gallery-section">
   <splide :options="options">
        <splide-slide>
            <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
        <splide-slide>
            <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
        <splide-slide>
           <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
        <splide-slide>
           <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
         <splide-slide>
           <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
         <splide-slide>
           <div class="slide-image">
                <img src="@/assets/img/about.jpg" alt="">
            </div>
        </splide-slide>
        </splide>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default defineComponent({
    components: {
        Splide,
        SplideSlide
    },
    setup() {
        const options = {
            rewind : true,
            // width  : ,
            perPage: 4,
            perMove: 1,
            // gap    : '1rem',
        }

        return {
            options
        }
    }
})
</script>

<style lang="scss">

.gallery-section {
    // padding-left: 32px;
    // padding-right:
    .slide-image {
        img {
            height: 210px;
            object-fit: cover;
            width: 100%;
            object-position: center;
        }
    }
}

.splide__arrow {
    background: #84A872;
    height: 42px;
    width: 42px;
}

.splide__arrow svg {
    fill: white;
}

</style>