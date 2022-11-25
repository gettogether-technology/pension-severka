<template>
  <div class="contact-section">
    <div class="container">
        <div class="separator-sec flex items-center mt-4 mb-4">
            <img class="mr-2" src="@/assets/img/object-green.png" alt="">
            <div class="border-effect"></div>
        </div>
        <h2 class="mb-8">Neváhejte nás kontaktovat</h2>
        <div class="grid grid-cols-3 gap-8">
            <section class="contact">
                <div class="mb-1 position">
                    <span>Majitel penzionu </span>
                </div>
                <div class="name">
                    <strong>Martin Kalivoda</strong>
                </div>
                <div class="phone flex items-center mb-4 mt-8">
                    <img class="mr-2" src="@/assets/icons/phone.svg" alt="">
                    <NuxtLink to="tel:+420605213901">
                        +420 605 213 901
                    </NuxtLink>
                </div>
                <div class="mail flex items-center mb-4">
                    <img class="mr-2" src="@/assets/icons/mail.svg" alt="">
                    <NuxtLink to="mailto:penzionseverka@email.cz">
                        penzionseverka@email.cz
                    </NuxtLink>
                </div>
                <div class="location flex items-start">
                    <img class="mr-2" src="@/assets/icons/location.svg" alt="">
                    <NuxtLink to="https://en.mapy.cz/s/fovezefusa" target="_blank">
                        517 61 Rokytnice v Orlických Horách 385  
                    </NuxtLink>
                </div>
                <button class="mt-8 btn col-primary">Kontakt</button>
            </section>
            <section class="map col-span-2">
                <iframe style="border:none" src="https://en.frame.mapy.cz/s/lekazopuku" width="100%" height="100%" frameborder="0"></iframe>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<style lang="scss" scoped>

.contact-section {
    padding-top: 64px;
    padding-bottom: 64px;
}


.contact {
    img {
        width: 32px;
        height: 32px;
    }

    .name {
        font-size: 20px;
        margin-bottom: 8px;
    }
    .position {
        font-size: 16px;
        color: #84A872;
    }

    a {
        font-size: 20px;
        font-weight: 800;
    }
}

.map {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

</style>