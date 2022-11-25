<template>
  <div class="hero-section">
    <div class="bg-image">
        <img src="@/assets/img/severka.jpg" alt="">
    </div>
    <div class="container">
        <section class="content">
        <h1 class="title">
            Penzion Severka
        </h1>
        <div class="separator-sec flex items-center mt-4 mb-4">
            <img class="mr-2" src="@/assets/img/object-green.png" alt="">
            <div class="border-effect"></div>
        </div>
        <h2 class="subtitle">
            Rokytnice v Orlických horách
        </h2>
        <div class="buttons-group mt-4 flex">
            <button class="btn var-primary col-primary mr-4">
                O Pensionu
            </button>
            <button class="btn var-outline">
                Vybavení
            </button>
        </div>
    </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>

.hero-section {
    position: relative;
    height: 520px;

    .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: -1;

        &::after {
                position: absolute;
                z-index: 1;
                content: '';
                height: 100%;
                width: 100%;
                left: 0px;
                top: 0px;
                background: linear-gradient(0deg, 
                            rgba(17,17,17,1) 0%, 
                            rgba(17,17,17,0.5) 54%, 
                            rgba(17,17,17,0.4) 100%);
            }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-position: center;
        }
    }
}

.content {
    padding-top: 160px;
    position: relative;
    z-index: 2;
    max-width: 50%;
    margin-left: 62px;

    h1 {
        font-size: 62px;
        font-weight: 400;
        color: white;
        letter-spacing: 6px;
    }

    h2 {
        color: white;
        font-size: 400;
    }

    .description {
        color: white;
    }

}

</style>