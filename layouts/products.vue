<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
               
                <nuxt-link to="/products">Home</nuxt-link>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer>
            <ul class="flex gap-4">             
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products">index Product</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products/1234">Detail produit</nuxt-link>
                </li>
            </ul>
        </footer>
    </div>

</template>
<style scoped>
    .router-link-exact-active{
        color : #12b488
    }
</style>