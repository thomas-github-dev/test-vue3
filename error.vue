<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">
           Error : {{  error.statusCode }}
        </p>
        <p class="mt-7 text-5xl">
            {{  error.message }}
        </p>
        <button class="btn my-7" @click="handleError">Retour</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleError = () => clearError({redirect : '/', fatal:true})
</script>

<style  scoped>

</style>