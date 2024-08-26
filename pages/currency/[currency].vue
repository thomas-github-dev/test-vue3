<template>
    <h1>Detail pour {{ data['data']['data'][currency]['code'] }}</h1>
    <div>
{{ data['data']['data'][currency]['code']  }} == {{ data['data']['data'][currency]['value']  }}
    </div>
    {{ data }} 
</template>

<script setup>
    const { currency } = useRoute().params

    const {data} = await useFetch('/api/currency/'+currency)


</script>

<style  scoped>

</style>