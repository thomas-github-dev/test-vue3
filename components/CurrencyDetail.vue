<template>
    <div >    
    <NuxtLink :to="'/currency/'+currency.code"><p class="btn my-4 p-4">{{ currency.code }}</p></NuxtLink>
    </div>
</template>

<script setup>
    const {currency} = defineProps(['currency'])
</script>

<style  scoped>

</style>