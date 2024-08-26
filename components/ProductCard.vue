<template>
    <div class="card text-center">
        <img :src="product.image" alt="" class="thumb">
        <p class="font-bold text-gray-300 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="'/products/'+product.id"><p class="btn my-4">Details</p></NuxtLink>

    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style  scoped>
.thumb {
    max-height:120px;
    max-width:70%;
    margin:0 auto
}
</style>