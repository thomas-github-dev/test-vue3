<template>
    <div>      
        <ProductDetail :productDetail="product"/>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/'+id;

    const { data:product}= await useFetch(uri)
    if (!product.value){
        throw createError({statusCode:355,statusMessage:"Produit non trouvé"})
    }
</script>

<style scoped>

</style>