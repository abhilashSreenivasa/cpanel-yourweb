
const axios=require('axios')
token=""+process.env.CPANEL_TOKEN
url=""+process.env.ACCT_COUNTS

const config = {
    headers: {
      Authorization: `whm  root:${token}`
    }
  }

async function acctCounts(){
    let response=await axios.get( 'https://chico.reclaimhosting.com:2087/cpsess6157112120/json-api/acctcounts?api.version=1',
   config)
    let data=await response.data
    return data
}
module.exports=acctCounts