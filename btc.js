const axios = require('axios');
const { response } = require('express');

async function main() {
    const currency = (process.argv[2] || 'USD').toUpperCase();
    
    try {
        const { data } = await axios.get('http://api.coindesk.com/v1/bpi/currentprice.json');
        const rate = data.bpi[currency].rate;
        const updatedAt = data.time.updated;
        console.log(`> 1 BTC = ${rate} ${currency}, dernière mise à jour: ${updatedAt}`);
    } catch (err) {
        console.log("La devise entré est inconnue, essayez avec EUR, USD, GBP");
    }
}

main();




//console.log(response)
 //   console.log(response.data.bpi[parametre]);