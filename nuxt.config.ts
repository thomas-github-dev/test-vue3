// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://apis.google.com/js/api.js",
          type: "text/javascript",
        },
        {
          src: "https://accounts.google.com/gsi/client",
          type: "text/javascript",
        },
        {
          src: "https://matagon-market.fr/nouveau_site/test/test.js",
          type: "text/javascript",
        }
      ]
    }
  }
  ,
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-auth-utils", "shadcn-nuxt"],
  runtimeConfig : {
      currencyKey : process.env.CUREENCY_API_KEY,
      public: {
        googleAPIKey : process.env.GOOGLE_DRIVE_API_KEY,
        googleIDClient : process.env.GOOGLE_CLIENT_ID
      },
      oauth:{
        google:{
          clientId : process.env.GOOGLE_CLIENT_ID,
          clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }
      }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
  
})