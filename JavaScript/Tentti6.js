let taulukko = [2, 'merkkijono', 4, {nimi: 'Jaska', ika: 3}, true]
taulukko.splice(1,2,3,4);
console.log(taulukko);


let taulukko1 = ['merkkijono', 4, {nimi: 'Jaska', ika: 3}, true];
taulukko1.shift();
console.log(taulukko1);

let valot = {olohuone: true, makuuhuone: false, tyohuone: false, WC: false, eteinen: true};
for (let huoneet in valot) { console.log(huoneet); }

let taulukko2 = ['mj',3,true];
let ut = [...taulukko2, 3];
console.log(taulukko2);
console.log(ut);

let alfabet = {aakkoset: 'a', kirjaimet: {kirjain: 'b'},numerot: {nro2: 2, nro3: 3, isot: {iso1: 100, iso2: 500}}};
console.log(alfabet.numerot.isot.iso2);
// console.log(alfabet.numerot.iso2);
// console.log(iso2);
// console.log(alfabet.iso2);

let taulukko3 = [2, 'merkkijono', 4, {nimi: 'Jaska', ika: 3}, true];
uusiTaulukko3 = taulukko3.splice(1,2);
console.log(uusiTaulukko3);
console.log(taulukko3);

let taulu = [1,12,[33,45,[15, 600,[57]]]];
console.log(taulu[2][2][2][1]);
console.log(taulu[2][2][0]);
console.log(taulu[2][2][0]);
console.log(taulu[2][1]);


let taulukko4 = ['merkkijono', 2, {nimi: 'Jaska', ika: 3}, true];
console.log(taulukko4[1]);
console.log(taulukko4[1]);
console.log(taulukko4[1]);
console.log(taulukko4.length);


let taulukko5 = [2, 'merkkijono', 4, {nimi: 'Jaska', ika: 3}, true];
let uusiTaulukko5 = taulukko5.slice(1,2);
console.log(uusiTaulukko5); // = ['merkkijono']
console.log(taulukko5); // = [2, {nimi: 'Jaska', ika: 3}, true]
console.log(taulukko5); // = [2, 4, {nimi: 'Jaska', ika: 3}, true]
console.log(uusiTaulukko5); // = ['merkkijono', 4]


let valot1 = {olohuone: true, makuuhuone: false, tyohuone: false, WC: false, eteinen: true};
 let kentat = Object.keys(valot1);
 console.log(kentat);
