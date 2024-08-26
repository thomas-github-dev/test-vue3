<template>
    
    
      
    <div class="flex flex-row  ml-5 mt-5 gap-x-8 h-8 flex-nowrap items-center  w-fit">
        <div class="flex p-1 flex-1">
       <img :src="img_drive" alt="" class="thumb"/>
      </div> 
        <div class=" align-middle justify-center h-8 m-auto"> 
          {{ drive_detail.name }} 
      
        </div>
        <div class="flex  text-nowrap  align-middle"> 
          <Popup :popup_detail="{id:drive_detail.id,name:drive_detail.name}" @supprimer="supprimer"/>
         <!-- <a @click="supprimer(drive_detail.id)" class="btn">Delete</a>-->
      
        </div>
        <div class="flex  text-nowrap  align-middle"> 
          <!--<a @click="open(drive_detail.id)"  class="btn">Open</a>>-->
          <NuxtLink :href="url" external target="_blank">Open</NuxtLink>
          
        </div>
      </div>
     
   
 

</template>

<script setup lang="ts">
const {drive_detail} = defineProps(['drive_detail'])

const emit = defineEmits(["supprimer","open"])

function supprimer(id:string) {
  console.log("emit suppression")
  emit("supprimer",id)
}

function open(id:string) {
  console.log("emit open")
  emit("open",id)
}

let img_drive  = "more.png"
console.log(drive_detail.mimeType)
switch (drive_detail.mimeType) {
  case 'image/jpeg' : img_drive = "/jpg.png";break;
  case 'image/png' : img_drive = "/jpg.png";break;
  case 'application/pdf' : img_drive = "/pdf.png";break;
  case 'application/vnd.google-apps.folder' :  img_drive = "/folder.png";break;
  default: img_drive = "/more.png";
}

let url = ref('https://drive.google.com/file/d/'+drive_detail.id+'/view?usp=share_link')

</script>

<style  scoped>
.thumb {
    max-height:25px;
   
    margin:0 auto
}
</style>