
<script setup >

      definePageMeta({
         middleware:"logged-in",
         layout: 'connexion'
      })
      //const { user } = useUserSession();
     
      const  googleAPIKey  = process.env.googleAPIKey; //"AIzaSyABhPNaP9o6cOkVZjJbfNg_rsHVqf9P3M0"
      const  googleIDClient  = process.env.googleIDClient;//"407602233142-57nieisr74vkn9r4l62b99vmg58vc3gd.apps.googleusercontent.com"
      
      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/drive';

      //gapi.load('client', test)
      let tokenClient;
      let files;
      const { loggedIn, user } = useUserSession()
      
      var gapiInited = false;
      var gisInited = false;
      
      function checkAll(){
        console.log("checkAll")
        console.log("gapiInited",gapiInited)
        console.log("gisInited",gisInited)
        if (gapiInited && gisInited) listFiles();
      }
  
      function initialize_gapi(){
        gapi.load('client', initializeGapiClient);
      }
      async function initializeGapiClient() {
        console.log("initializeGapiClient")
       await gapi.client.init({
          apiKey: googleAPIKey,
          discoveryDocs: [DISCOVERY_DOC]
          
        });
        gapiInited = true;
        checkAll()
      }



      function gisLoaded() {
        console.log("gisLoaded")
        gisInited = true;
        
        checkAll()
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: googleIDClient,
          scope: SCOPES,
          callback: '', // defined later
        });
        
       
        
      }
      
      let navigation = [{name:'HOME',id:""}];
      let requete = '';
      let parent_folder='';
      const access_drive = ref (false)
      let files_fich = [];
      let files_folder = [];
      var content_sortie = ref('')
       
      const listFiles = async () =>{
        access_drive.value=false
        files_fich = [];
        files_folder = [];
        console.log("token",user.value.token.access_token)
        console.log("LIST file function")
        var token = 
        gapi.client.setToken({"access_token":user.value.token.access_token })
        
        let response;
        try {
          response = await gapi.client.drive.files.list({
            'pageSize': 100,
            q: requete
          //  'fields': 'files(id, name)',
          });
        } catch (err) {
         content_sortie.value = "Message erreur= "+err.message;
          return;
        }
       files = response.result.files;
        /*if (!files || files.length == 0) {
         content_sortie.value = 'No files found.';
          return;
        }*/

        files.forEach(element => {
            if (element.mimeType == 'application/vnd.google-apps.folder') files_folder.push(element)
            else files_fich.push(element)
        });
        console.log("files_folder",files_folder)
        console.log("files_fich",files_fich)
        access_drive.value=true
        // Flatten to string to display
        
       
       // content_sortie.value = affiche_element(files);
      }


 

      onMounted(async () => {
       try {
          
        initialize_gapi()
        gisLoaded()
        
        
       } catch(err) {

       } finally {
        
       // setTimeout(listFiles(), 2000)
        
       } 
     })
    
    function clicked(id,name) {
      console.log(id+"--"+name)
      if (id == '') {
        parent_folder = ''
        requete = ''
        navigation = [{name:'HOME',id:""}];
      } else {
         parent_folder = name
         requete = '"'+id+'" in parents'
        var nav_temp = []
         var index_find = 0;
         for (var i=0;i<navigation.length;i++){            
            if (navigation[i].id == id) {
              index_find = i;
              break;
            } else {
              nav_temp.push(navigation[i])
            }
         }
         navigation = nav_temp;
         navigation.push({name:name,id:id})
      }
     
     
      listFiles();
    }


    

    function supprimer(id) {
      //console.log(gapi.client.drive.files.get({'fileId': id}))
      var request = gapi.client.drive.files.delete({
        // give file id to delete
        'fileId': id
      });
      request.execute(function (res) {
        listFiles();
      })
     
    }

    let search_value = ""
    function search(search){
      search_value = search
      if (search!='') {
        console.log(requete)
        if (requete != ''){
          requete = requete + " and name contains '"+search+"'";
        } else {
          requete = "name contains '"+search+"'";
        }
        console.log(search)
        console.log(requete)
        listFiles();
      } else {
        requete=""
        listFiles();
      }
      
    }

    function open(id) {
        console.log("recup open")
        
    }


</script>

<template>
 
    <div class="ml-10">   
    <div class="my-4">
      <!-- <p>
      
          <Button id="affich_liste" @click="listFiles" class="btn">AFFICHE LIST</button>
        </p>      
      -->
          <div class=" w-full" v-if="access_drive">
          <GoogleDrive :drive="{'fich':files_fich,'fold':files_folder,'in_fold':parent_folder,'arbo':navigation}" v-if="access_drive"  @supprimer="supprimer" @open="open" @clicked="clicked"/>
        
        </div>
        <div v-else class="mt-2 w-full"> ... LOADING ...</div>
    </div>
    </div>
 
 
</template>