
const axios=require('axios')
token=""+process.env.CPANEL_TOKEN
url=""+process.env.ACCT_SUMMARY

const config = {
    headers: {
      Authorization: `whm  root:QWNJPKDDABK59SDHUB10N1DFLRLKSX11`
    }
  }

async function acctSummary(){
    let response=await axios.get( 'https://chico.reclaimhosting.com:2087/cpsess6157112120/json-api/accountsummary?api.version=1&domain=',
   config)
    let data=await response.data
    return data
}
module.exports=acctSummary