// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/partytown"],
  partytown: {
    forward: ["$plausible", "$plausible.push"],
  },
  app: {
    head: {
      script: [
        { children: "window.$plausible = [];" },
        // Update this
        {
          src: "https://plausible.io/js/script.js",
          defer: true,
          type: "text/partytown",
          "data-domain": "nuxt-partytown.vercel.app",
        },
      ],
    },
  },
});
