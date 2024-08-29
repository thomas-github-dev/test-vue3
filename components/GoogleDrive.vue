<template>
    <div v-if="arborescence" class=" mb-5" style="width:450px">
            <div>
                ARBORESCENCE
            </div>
            <div class="flex flex-row">
                <div  v-for="a in arborescence">  
                     <div>
                        <a @click="clicked(a.id,a.name)" class="flex cursor-pointer border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500">&nbsp;{{ a.name }} / </a>
                     </div> 
                </div>
                
               <!-- <div class="flex ">
                    Vous êtes dans {{ parent_folder }}
                </div>
                <div class="flex flex-grow">
                    <button  @click="clicked('','')" class="btn">Retour</button>
                </div>-->
            </div>
            
        </div>
    <div>
            REPERTOIRE DISPONIBLE
    </div>
    <div class="flex flex-row mt-1">
        
        <div  v-for="z in drive_folder">  
            <GoogleDriveFolder :drive_folder="z" @clicked="clicked"/>          
        </div>
    </div>
    <div class="flex flex-col mt-5" >
        <div class="flex flex-row mt-2" style="height: 50px;">

           
            <div class="" style="width:350px">
                    <Input placeholder="Recherche" v-model="search_value" @input="search()" />
                </div>
                
                <div v-if="search_value" class="ml-2">
                    
                    <Button @click="delete_search()" >X</Button>
                </div>
        </div>
       
   
            
       
        <div v-if="drive_file.length>0">
        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto" >
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width:100px">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width:400px">
                        Nom
                    </th>                   
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width:200px">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="p in list_affich" >  
                    
                    <!-- <GooleDriveDetail :drive_detail="p"/>          -->
                        <GoogleDriveDetail :drive_detail="p" @supprimer="supprimer" @open="open" :key="component_key"/>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="mt-4" v-else>
            Aucun fichier 
        </div>
        <Pagination   v-slot="{ page }" :total="drive_file.length" :sibling-count="1" show-edges :default-page="1" class="mt-10" v-if="drive_file.length>0">
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst  @click="change_index(0)"/>
           

            <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="change_index(index)">
                    {{ item.value }}
                </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            
            <PaginationLast  @click="change_index(items.length-1)"/>
            </PaginationList>
        </Pagination>
    </div>
   
    
    
</template>

<script setup lang="ts">

    //const emit = defineEmits(["clicked","supprimer","open","search"])
    const emit = defineEmits(["clicked","supprimer","open"])
    const {drive} = defineProps(['drive']);
    var drive_file = drive.fich;
    const sav_drive_file = drive.fich;
    const ori_drive_file = drive.fich;

    type data_drive = {id:string,name:string}

    const drive_folder = drive.fold;

    const parent_folder = drive.in_fold
    const arborescence = drive.arbo

    let index_start = 0
    let index_end = 10
    let component_key = ref(0)
    let search_value = ref("")
    
    let list_affich = ref(drive_file.slice(index_start,index_end))


    function delete_search() {
        console.log(" delete_search")
        search_value.value=""
        drive_file = sav_drive_file
        change_index(0)
    }

    function search(){
        console.log(search_value.value)
        drive_file = sav_drive_file
        var drive_file_temp = []
        //let word = new String("")
       // drive_file_temp =  drive_file.filter(filer_arr);   
       if (search_value.value!='')     {
        drive_file_temp = drive_file.filter((word:data_drive)=> word.name.includes(search_value.value));
        drive_file = drive_file_temp
        list_affich = drive_file_temp.slice(0,10)
        component_key.value+=1
       } else {
        console.log("search vide")
        /*drive_file = sav_drive_file
        drive_file_temp = drive_file*/
        delete_search()
       }
        
       // drive_file_temp = drive_file.filter(drive_file.name.some(val => val.includes(search_value.value)));
       // drive_file_temp = drive_file.filter((obj:data_drive) => JSON.stringify(obj).toLowerCase().includes(search_value.value.toString().toLowerCase()));

       
       
    }

    function change_index(new_index:number){
       // page = new_index
        index_start = new_index*10;
        index_end = index_start+10;
        list_affich = drive_file.slice(index_start,index_end)
        component_key.value+=1
        //console.log(list_affich)
    }

    function clicked(id:string,name:string) {
      console.log("emit2="+id+"--"+name)
      emit("clicked",id,name)
   }

   function supprimer(id:string) {
    console.log("emit suppression")
    emit("supprimer",id)
    }

   /* function search() {
    console.log("emit search")
   
    emit("search",search_value.value)
    }*/
 
    

    function open(id:string) {
        console.log("emit open")
        emit("open",id)
    }

</script>

<style  scoped>

</style>