<template>
    <div>
        <div class="card ">
           <div class="grid grid-cols-2 gap-10">
                <div class="p-7">
                    <img :src="productDetail.image" alt="" class="mx-auto my-7">
                </div>
                <div class="p-7">
                    <h1 class="font-bold text-4xl my-7">{{ productDetail.title }}</h1>
                    <p class="text-x1 my-7">Prix : {{ productDetail.price }}</p>
                    <h3 class="text-3x1 font-bold border-b-2 mb-4 pb-2">Description</h3>
                    
                    <p class="mb-7">{{ productDetail.description }}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {productDetail} = defineProps(['productDetail'])
</script>

<style scoped>
.thumb {
   
    max-width:250px;
    
}
</style>