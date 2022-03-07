if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
const axios=require('axios')
token=""+process.env.CPANEL_TOKEN
url=""+process.env.LIST_ACCTS

const config = {
    headers: {
      Authorization: `whm  root:${token}`
    }
  }

async function listAccounts(){
    let response=await axios.get( url,
   config)
    let data=await response.data
    return data
}
module.exports=listAccounts
