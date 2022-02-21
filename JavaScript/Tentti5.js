/*
// tehtävä 1
let lause = "Olipa kerran kana, jonka takana oli musta lakana. Pakana, sanoi kana, ja käytti niittiä hakana.";

let sana = /takana | pakana/;

sana.test(lause)

console.log(sana);




// tehtävä 11
let lause = "Olipa kerran kana, jonka takana oli musta lakana. Pakana, sanoi kana, ja käytti niittiä hakana.";

let sana = /[^h-n]/;
// (miten haen siten, että kaikki muut tulevat esille, paitsi h,i,j,k,l,m,n -kirjaimilla alkavat, eli mitä tähän tulee?
lause.match(sana);
console.log(sana);
*/

let lause = "Etsi lauseesta oikea sana";

let sana = /sana/;

sana.test(lause);
console.log(sana);
