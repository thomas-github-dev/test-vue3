<template>

    <div class="flex flex-row  w-fit mr-5">
      <div class="flex p-1 flex-1">
         <img src="/folder.png" alt="" class="thumb"/>
     </div> 
     <div class="flex p-1 flex-1 flex-nowrap text-nowrap text-sm ml-1"> 
          <button @click="clicked(drive_folder.id,drive_folder.name)" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500">{{ drive_folder.name }}  </button>  
     </div>
   </div>
   
   
   </template>
   
   <script setup lang="ts">
   const {drive_folder} = defineProps(['drive_folder'])
   
   const emit = defineEmits(["clicked"])

   function clicked(id:string,name:string) {
      console.log("emit1")
      emit("clicked",id,name)
   }

   //const emit = defineEmits([(e:'print_console',id:number):void)])
 
   </script>
   
   <style  scoped>
   .thumb {
       max-height:20px;
      
       margin:0 auto
   }
   </style>