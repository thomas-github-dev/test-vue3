
export default defineEventHandler(async (event)=> {

    const { currency } = event.context.params
    const { currencyKey } = useRuntimeConfig()
    const url = "https://api.currencyapi.com/v3/latest?apikey="+currencyKey+"&currencies="+currency

    const data = await $fetch(url)

    return {
        data
    }

})