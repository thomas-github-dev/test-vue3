<template>
    
    <td class="px-6 py-1 whitespace-nowrap">
        <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
                <img :src="img_drive" alt="" class="thumb"/>
            </div>
           
        </div>
    </td>
    <td class="px-6 py-1 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        <NuxtLink :href="url" external target="_blank" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500">{{ drive_detail.name }}</NuxtLink> 
      
      </div>
    </td>
    <td class="px-6 py-1 whitespace-nowrap  text-sm font-medium">
        
       <!-- <NuxtLink :href="url" external target="_blank" class="text-indigo-600 hover:text-indigo-900">Open</NuxtLink>-->
        <Popup :popup_detail="{id:drive_detail.id,name:drive_detail.name}" @supprimer="supprimer" />
    </td>
      
   
 

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