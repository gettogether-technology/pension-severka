<template>
<div class="navigation" :class="{active: activeMenu}">
    <div class="container">
        <div class="navigation-section grid grid-cols-3">
            <section class="logo">
                <img src="@/assets/img/logo.jpg" alt="">
            </section>
            <section class="col-span-2 nav-bar flex justify-end">
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
                <div class="ml-4 button">
                    <NuxtLink to="tel:+420605213901" class="btn col-primary">
                        +420 605 213 901
                    </NuxtLink>
                </div>
            </section>
        </div>
    </div>

</div>
  
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    setup() {
        const scrollPosition = ref(null)
        const activeMenu = ref(false)
        const updateScroll = () => {
            scrollPosition.value = window.scrollY
            
            if (scrollPosition.value >= 80) {
                activeMenu.value = true
            } else {
                activeMenu.value = false
            }
        }

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

        onMounted(() => {
            window.addEventListener('scroll', updateScroll)
        })
        
        return {
            navigation,
            activeMenu
        }
    },
})
</script>

<style lang="scss" scoped>

.navigation {
    width: 100%;
    position: fixed;
    z-index: 99;
    // background: #84A872;
    &.active {
        background: #111111e9;
        z-index: 10;
        transition: all ease .3s;
        opacity: .9;
    }

    .container {
        margin: 0 auto;
    }
}

.logo {
    max-width: 100%;
    width: 220px;
}

.navigation-section {
    padding: 16px;

    li {
        color: white;
        font-size: 16px;
        font-weight: 500;
        margin-right: 16px;

        &:last-child {
            margin-right: 0px;
        }
    }
}

.button {
    a {
        font-size: 14px;
        padding: 8px 16px;
    }
}
</style>