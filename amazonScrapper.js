const request = require('request-promise');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const  Schemas = require('./schema');

const data= [];

const connectMongoDB = async()=>{
    await mongoose.connect('mongodb+srv://Yuvaraj:Admin123@cluster0.lpdgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log("Connection estabished successfully");
}

const searchItem=['Shirt','jeans','pants','chair'];

const scrapeddata =()=>{


for(i=0; i<=searchItem.length;i++)
{
   scappering= async()=>{
    
    const webPage= await request.get('https://www.amazon.in/s?k='+searchItem[i]);
    const $ = await cheerio.load(webPage);

    $('.s-asin').each((i,el)=> {
        const id = $(el).attr('data-asin');
        // const brand = $(el).find('h5 .a-size-base-plus').text();
         const title = $(el).find('h2 span').text();  
        const price = $(el).find('.a-price-whole').text();
        const rating = $(el).find('.a-spacing-top-micro span').attr('aria-label');
        const image = $(el).find('.s-image').attr('src');
        // const link = 'https://www.amazon.in'+$(el).find('.a-link-normal').attr('href');
        const details = {id,title,price,rating,image};
        data.push(details)
        Schemas.create({
              id : id,
              title: title,             
              price:price,
              rating:rating,
              image:image,             
          }).then((list)=> {
              console.log(list)
          }); 
        
    });

    return data;

}



const initial = async()=>
{
    await connectMongoDB();
    const scappered = await scappering();
    console.log(' scapping is done #######');
    return scappered;
}

initial();


}



}

module.exports={
    amazon: ()=>{


        for(i=0; i<=searchItem.length;i++)
        {
           scappering= async()=>{
            
            const webPage= await request.get('https://www.amazon.in/s?k='+searchItem[i]);
            const $ = await cheerio.load(webPage);
        
            $('.s-asin').each((i,el)=> {
                const id = $(el).attr('data-asin');
                // const brand = $(el).find('h5 .a-size-base-plus').text();
                 const title = $(el).find('h2 span').text();  
                const price = $(el).find('.a-price-whole').text();
                const rating = $(el).find('.a-spacing-top-micro span').attr('aria-label');
                const image = $(el).find('.s-image').attr('src');
                // const link = 'https://www.amazon.in'+$(el).find('.a-link-normal').attr('href');
                const details = {id,title,price,rating,image};
                data.push(details)
                Schemas.create({
                      id : id,
                      title: title,             
                      price:price,
                      rating:rating,
                      image:image,             
                  }).then((list)=> {
                      console.log(list)
                  }); 
                
            });
        
            return data;
        
        }
        
        
        
        const initial = async()=>
        {
            await connectMongoDB();
            const scappered = await scappering();
            console.log(' scapping is done #######');
            return scappered;
        }
        
        initial();
        
        
        }
        
        
        
        }












}

