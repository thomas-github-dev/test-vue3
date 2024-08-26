<script setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()


definePageMeta({
      layout: 'connexion'
  })
</script>

<template>

   
  <div v-if="loggedIn">
   
    <div class="container h-screen flex justify-center pt-10 text-center">
      
      <div class="center ">
        <h1>Bonjour {{ user?.name }}</h1>
        <p class="my-5">
          <nuxt-link href="/profile" class="btn w-auto ">Acceder à mon compte</nuxt-link>
        </p>
       
        <button @click="clear" class="btn w-auto my-4">Deconnexion</button>
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