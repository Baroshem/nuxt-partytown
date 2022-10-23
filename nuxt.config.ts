// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    defer: true,
                    src: 'https://plausible.io/js/plausible.js',
                    'data-domain': 'nuxt-partytown.vercel.app'
                }
            ]
        }
    }
})
