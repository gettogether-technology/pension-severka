<template>
  <div class="footer-section">
    <div class="container">
        <div class="flex items-center">
            <section class="logo">
                <img src="@/assets/img/logo.jpg" alt="">
            </section>
            <section class="menu">
                <nav class="flex items-center">
                    <ul class="flex">
                        <li
                            v-for="item in navigation"
                            :key="item.id"
                        >
                           <NuxtLink :to="item.route"> 
                              {{ item.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
        <section class="copy">
            Vytvořila digitální agentura 
            <NuxtLink to="https://gettogether.cz/" target="_blank">
              Gettogether technology 2022
            </NuxtLink>
        </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const navigation = [
            {
                title: 'O penzionu',
                route: '#'
            },
            {
                title: 'Vybavení',
                route: '#'
            },
            {
                title: 'Ceník',
                route: '#'
            },
            {
                title: 'Turistika, Lyžování',
                route: '#'
            },
            {
                title: 'Rezervace',
                route: '#'
            },
            {
                title: 'Kontakty',
                route: '#'
            },
        ]
        
        return {
            navigation
        }
    },
})
</script>

<style lang="scss" scoped>
.footer-section {
    padding-top: 42px;
    padding-bottom: 42px;
    background: #111111;
}

.menu {
    margin-left: 32px;
    li {
        margin-right: 16px;
        font-size: 18px;
        font-weight: 600;
        color: white;
    }
}

.copy {
    margin-top: 32px;
    color: white;

    a {
        font-weight: 800;

        &:hover {
            color: #111111;
        }
    }
}

.logo {
    max-width: 180px;
}

</style>