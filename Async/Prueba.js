const fetch = require('node-fetch');
 //import {fetch} from "node-fetch";


async function getName(name) {
    let url = `https://api.github.com/users/${name}`
    //let url ='https://remaxrd.me:9697/getdatasql/?params=select%20*%20from%20crmenud'
    let respuesta = await fetch(url);
    let json = await respuesta.json();

    if (respuesta.status !== 202)
        throw Error(`usuario ${name} no existe`)
    else
        return json;

}

(async function () {
    try {
        var r= await getName('natanaelmedina');
        console.log(r)
    } catch (error) {
        console.log('error:'+error) 
    }
})()





