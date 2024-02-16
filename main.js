/* import { oszthato5el } from "./fuggvenyek.js";

console.log(oszthato5el(25));

//teszt

//0 -> 0
console.log(`szam=0 -> true`)
console.log(`szam=0 -> ${oszthato5el(0)}`)
// 1 -> false
console.log(`szam=1 -> false`)
console.log(`szam=1 -> ${oszthato5el(1)}`)
// 5 -> true
console.log(`szam=5 -> true`)
console.log(`szam=5 -> ${oszthato5el(5)}`)
//55.68 -> false
console.log(`szam=55.68 -> false`)
console.log(`szam=55.68 -> ${oszthato5el(55.68)}`)
//-25 -> true
console.log(`szam=25 -> true`)
console.log(`szam=25 -> ${oszthato5el(25)}`)
//rókarudi -> hiba
console.log(`szam=rokarudi -> hiba`)
console.log(`szam=rokarudi -> ${oszthato5el("rokarudi")}`)
//555555555555555555 -> true
console.log(`szam=555555555555555555 -> true`)
console.log(`szam=555555555555555555 -> ${oszthato5el(555555555555555555)}`)
//"5" -> 
console.log(`szam="5" -> nem szám`)
console.log(`szam="5" -> ${oszthato5el("rokarudi")}`)
*/


/* Hoisting: ha egy változo/függvényt dekralárjuk, bárhol a programban, a hatóköre tetején elérhető */


function fv1(){
    {
    var valt1=25;
    console.log(`blokkon belül valt1: ${valt1}`)
    }
    console.log(`blokkon kívül, de fv belül`)
}


console.log(`valt1: ${valt1}`)
var valt1 = 5 /* globális változó */
fv1()

/* A var kétféle láthatósága lehet 1. modul szintű (globális) 2. függvényszintű (lokális) */
/* a let esetében a hatókör lehet globális, vagy blokkszintű */

function fv2(){
    for (let index = 0; index < 3; index++){
        console.log(index)
    }
    console.log(index)
}

fv2()