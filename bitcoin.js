const {default : axios}= require("axios");
async function main( ){

  const currency = process.argv[2]
  ? process.argv[2].toUpperCase()
  : 'USD';

try{
 const endPoint = "https://api.coindesk.com/v1/bpi/currentprice.json";

const {data}=await  axios.get(endPoint);
if (!data.bpi[currency]){
  throw new Error("Desvise n'existe pas");
}
const updatedAt= data.time.updated; 
const rate = data.bpi['USD'].rate;
console.log(`> 1BTC =${rate} ${currency}(${updatedAt}) `);
}
catch(err){
console.log(err.toString());
}}

main();