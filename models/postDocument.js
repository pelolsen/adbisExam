const axios = require('axios')
async function postDoc(data, auth){
    const res = await axios.post('https://api.mindbodyonline.com/public/v6/client/uploadclientdocument', data,{
            headers:{
                'Api-Key': "2af6763ede644dd6a5ac858400ea41d9",
                'SiteId': "-99",
                'Content-Type': "application/json",
                'Authorization': auth
            }
        }).catch((err)=>{console.log('Der er fejl i POST');})
};
module.exports=postDoc;

const evtdata ={
    ClientId: "clientid",
    File: {
      FileName: "filename",
      MediaType: "application/pdf",
      Buffer: "Filen"
    }
}