<template>
    <div>
        <h2>About Cureency</h2>
        <div class="font-bold text-center mb-10">
            {{ current_value === 0 ? 'Selectionnez une valeur' : current_value }}
        </div>
        <div class="grid grid-cols-6">
            <div v-for="p in data['data']['data']" >            
                <a @click="changeValue(p.code)" class="p-2 pointer-events-auto">Affiche {{p.code}}</a>
                <NuxtLink :to="'/currency/'+p.code"><p class="btn my-4 p-4">{{p.code}}</p></NuxtLink>
                
            </div>
        </div>
    </div>
    <div>
        <h2>Data Raw</h2>
        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { refreshNuxtData, useAsyncData } from 'nuxt/app';

   // const {data} = await useFetch('/api/hello', { method: "post", body:{age:21,name:"maria"}})
   const current_value = ref(0)
   //const {data} = await useFetch('/api/hello')
   const {data} = await useFetch('/api/all_currency')
   
    const changeValue = async (code:string) => {
        console.log(code)
        await $fetch('/api/currency/'+code,{
            onResponse({request,response,error}){
                current_value.value = code+" = "+ response._data.data.data[code].value;
                //refreshNuxtData()
            }
        })
       /* var data_detail = await useAsyncData('code', () => $fetch('/api/currency/'+code))
        console.log(data_detail)
        current_value = data_detail['data']['data'][code]['value']
        refreshNuxtData()*/
    }

   /* async function changeValue(code) {
        console.log(code)
        current_value = await $fetch('/api/currency/'+code)
        refreshNuxtData(current_value)
    }*/

</script>

<style lang="css" scoped>
    h2 {
        font-size:36px;
    }
    p {
        margin : 20px 0;
    }
</style>