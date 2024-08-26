import { useFetch } from "nuxt/app"

export default defineEventHandler(async (event)=> {
    
  //  const info = await readBody(event)
    
    //const {age} = await readBody(event)
    const { currencyKey } = useRuntimeConfig()
    const data = await $fetch("https://api.currencyapi.com/v3/latest?apikey="+currencyKey)

    return {
        data
    }
})