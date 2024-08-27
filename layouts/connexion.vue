<template>
    <div>
         <header >

            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                   
                    <nuxt-link to="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Home</nuxt-link>    
                    <nuxt-link to="/about" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Test call api monnaie</nuxt-link>    
                    <nuxt-link to="/products" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Test boutique</nuxt-link>    
                    <nuxt-link to="/profile" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Test connexion</nuxt-link>    
                    

                </div>
            </nav>
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-1 mx-auto text-gray-600 capitalize dark:text-gray-300">
                   
                    <nuxt-link to="/profile/google" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Google Account</nuxt-link>    
                    <nuxt-link to="/profile/google_drive" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" >Google Drive</nuxt-link>    
                   

                </div>
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