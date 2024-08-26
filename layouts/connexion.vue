<template>
    <div>
         <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold" >Home</nuxt-link>
                <ul class="flex gap-4">
                   
                    <li>
                        <nuxt-link to="/about">Test call api monnaie</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products">Test boutique</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/login" >Test connexion</nuxt-link>
                    </li>
                
                </ul>
            </nav>
            <nav class="container mx-auto p-4 flex justify-between flex">
                <ul class="flex gap-4 ml-auto">
                    <li>
                        <nuxt-link to="/profile/google"  >Google Account</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/profile/google_drive">Google Drive</nuxt-link>
                    </li>
                    
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    
    </div>

</template>
<style scoped>
    .router-link-exact-active{
        color : #12b488
    }
</style>