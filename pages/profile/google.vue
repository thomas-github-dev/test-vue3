
<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()
//console.log("user",user)
const logout = async () =>{
    await clear();
    navigateTo("/",{replace:true})
}
definePageMeta({
   // middleware:"logged-in",
    layout: 'connexion'
})

</script>
<template lang="">

    <div v-if="loggedIn">
    
        <div class="container  flex justify-center pt-10 text-center">
            
            <div class="card ">
                <div class="grid grid-cols-2 gap-2">
                    <div class="p-7">
                        <img :src="user?.img" alt="" class="mx-auto my-7">
                    </div>
                    <div class="p-7">
                        <h1 class="font-bold text-4xl my-7">{{ user?.login }}</h1>
                        <h1 class="font-bold text-4xl my-7">{{ user?.email }}</h1>
                        <h1 class="font-bold text-4xl my-7">{{ user?.id }}</h1>
                       <!-- <p class=" my-7">{{ user?.token }}</p>-->
                        <p class="text-x1 my-7"><button @click="logout" class="btn my-4">Deconnexion</button></p>
                        <p class="text-x1 my-7">
                            <nuxt-link href="/profile/google_drive" class="btn" external>Acces au drive</nuxt-link>
                        </p>
                        <p class="text-x1 my-7">
                            <a href="/api/auth/youtube" type="button">
                                Choose channel to join
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container h-screen flex justify-center pt-10 text-center">
            <div>
                <h1 class="text-2x1 font-bold">Vous n'etes pas connecté</h1>
                <p class="p-5">Veuillez vous connecter</p>
                <!-- <a href="/api/auth/google" class="btn mt-5">Login Google</a>-->
                    
                <nuxt-link href="/api/auth/google" class="btn" external>Login Google</nuxt-link>
                    

            </div>
        </div>
    
    </div>


   


</template>


<style lang="">
    
</style>