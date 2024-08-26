
<script setup >

/* exported gapiLoaded */
      /* exported gisLoaded */
      /* exported handleAuthClick */
      /* exported handleSignoutClick */
      let { content_log } = ref("debut")

      // TODO(developer): Set to client ID and API key from the Developer Console
      const CLIENT_ID = "407602233142-57nieisr74vkn9r4l62b99vmg58vc3gd.apps.googleusercontent.com";
      const API_KEY = "AIzaSyABhPNaP9o6cOkVZjJbfNg_rsHVqf9P3M0";

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

      let tokenClient;
      let gapiInited = false;
      let gisInited = false;

     
      /**
       * Callback after api.js is loaded.
       */
      function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }

      /**
       * Callback after the API client is loaded. Loads the
       * discovery doc to initialize the API.
       */
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
      }

      /**
       * Callback after Google Identity Services are loaded.
       */
      function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }

      /**
       * Enables user interaction after all libraries are loaded.
       */
      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
          content_log = "Chargement OK"
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          console.log("resp handle auth",resp)
          if (resp.error !== undefined) {
           
            throw (resp);
          }
        
          await listFiles();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

    

      /**
       * Print metadata for first 10 files.
       */
      async function listFiles() {
        console.log("LIST FILE")
        
        let response;
        try {
          response = await gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': 'files(id, name)',
          });
        } catch (err) {
          content_log.value = err.message;
          return;
        }
        const files = response.result.files;
        if (!files || files.length == 0) {
          content_log = 'No files found.';
          return;
        }
        // Flatten to string to display
        const output = files.reduce(
            (str, file) => `${str}${file.name} (${file.id})\n`,
            'Files:\n');
            content_log = output;
      }


     onMounted(async () => {
      gapiLoaded()
      gisLoaded()
     })
</script>

<template>
     
     <button id="authorize_button" @click="handleAuthClick">Authorize</button>
   
    <pre id="content" style="white-space: pre-wrap;">{{ content_log }}</pre>
    <button id="list" @click="listFiles">List Files</button>
</template>