
const axios=require('axios')
token=""+process.env.CPANEL_TOKEN
url=""+process.env.LIST_ACCTS
console.log(url)
const config = {
    headers: {
      Authorization: `whm  root:${token}`
    }
  }

async function listAccounts(){
    let response=await axios.get( 'https://chico.reclaimhosting.com:2087/cpsess6157112120/json-api/listaccts?api.version=1',
   config)
    let data=await response.data
    return data
}
module.exports=listAccounts
