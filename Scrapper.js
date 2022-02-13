import React from 'react';
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const url = "https://www.amazon.in/s?k=mobile";

function Scrapper() {



  return ( <div>{fetchdetails()}
    </div>);
}





// /* ... */
// // cron.schedule('0 */12 * * *', async () => {
//   console.log('running a task every hour ⏲️');
//   const html = await getHTML(productPage).catch(console.log);
//   const currentPrice = currencyStringToNumber(scrapPrice(html));
//   if (currentPrice < desiredPrice) {
//     console.log('Congratulations! you just saved some bucks 💵');
//   }
// // });


// function scrapPrice(html) {
//     const $ = cheerio.load(html); //First you need to load in the HTML
//     const price = $(selector)
//       .text() // we get the text
//       .trim();
//       return price;
//   }


// async function rawHTML (urls) {
//     const { data: html } = await axios.get(urls).catch(() => {
//       console.log("Couldn't get the page ☹️")
//     })
//     return html
//   }



//git adds

async function fetchdetails(){
try{

const response = await axios.get("https://www.amazon.com/s?k=mobile&crid=2EJZBZWHTVS7R&sprefix=mobile%2Caps%2C4256&ref=nb_sb_noss",{headers: {"Access-Control-Allow-Origin": "http://localhost:3000/",'Access-Control-Allow-Credentials': 'true',"Access-Control-Allow-Methods":"GET, OPTIONS, POST, PUT"}});
const htmlpage = response.data;
const $ = cheerio.load(htmlpage);

const product =[];

$('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
    const prod = $(el)
    const title = prod.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
console.log(title)
    product.push(title)
});

return product;

}catch(err)
{
    throw err;
}

}


export default Scrapper;
