// import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {    
      head: {      
        charset: 'utf-16',      
        viewport: 'width=500, initial-scale=1',
        title: 'Hotel Severka',
          meta: [
            // <meta name="description" content="My amazing site">        
            { name: 'description', content: 'My amazing site.' }     
          ],
          link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
            }
          ]
        }  
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '@/assets/css/main.css',
        '@/assets/scss/main.scss'
      ],
    build: {
    }
})
