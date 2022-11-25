<template>
  <div class="benefits-section">
    <div class="container">
        <div class="separator-sec flex items-center mt-4 mb-4">
            <img class="mr-2" src="@/assets/img/object-white.png" alt="">
            <div class="border-effect-white"></div>
        </div>
        <h2 class="mb-8">Výhody</h2>
        <div class="check-box grid grid-cols-4 gap-8">
            <div 
                v-for="item in data"
                :key="item.id"
                class="box">
                <div class="header mb-2 flex items-center">
                  <div class="icon mr-4">
                    <img src="@/assets/icons/check.svg">
                  </div>
                  <h3>{{ item.title }}</h3>
                </div>
                <span>
                    {{ item.content }}
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {

        return {
        }
    }
})
</script>

<style lang="scss" scoped>

.benefits-section {
    background-image: url('./assets/img/forest-bg.jpg');
    background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 82px;
    padding-bottom: 82px;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: linear-gradient(0deg, 
                    rgba(17,17,17,1) 0%, 
                    rgba(17,17,17,0.6) 54%, 
                    rgba(17,17,17,0.8) 100%);
        opacity: 1;
        z-index: 1;
    }
}

h2 {
    position: relative;
    z-index: 2;
    color: white;
}

.check-box {
    position: relative;
    z-index: 2;
    color: white;
}

.box {

    h3 {
        font-size: 24px;
    }

    span {
        color: white;
        font-size: 16px;
    }
    .icon {
        position: relative;
        background: #84a872d7;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }
}

</style>