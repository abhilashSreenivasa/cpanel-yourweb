if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
const axios=require('axios')
token=""+process.env.CPANEL_TOKEN
url=""+process.env.ACCT_COUNTS

const config = {
    headers: {
      Authorization: `whm  root:${token}`
    }
  }

async function acctCounts(){
    let response=await axios.get( url,
   config)
    let data=await response.data
    return data
}
module.exports=acctCounts