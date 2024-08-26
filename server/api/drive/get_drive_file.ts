export default defineEventHandler(async (event) =>{

    const { googleAPIKey } = useRuntimeConfig()
    const url = "https://www.googleapis.com/upload/drive/v3/files?key="+googleAPIKey
    const data = await $fetch(url)

    return {
        data
    }
})