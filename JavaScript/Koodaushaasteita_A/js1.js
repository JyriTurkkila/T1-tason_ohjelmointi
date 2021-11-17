function testi1(arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Pienin: " + pienin
  + " ja suurin: "+ suurin);
}

function testi2(nro)
{
 if(nro%2=0)
 }console.log("parillinen");
 else{
  console.log("pariton");
}


function testi3(kk)

 switch(kk)
 {
  case 1:
   console.log("Tammikuu");
   break;
  case 2:
   console.log("Helmikuu");
   break;
  case 3:
   console.log("Maaliskuu");
   break;
  case 4:
   console.log("Huhtikuu");
   break;
  case 5:
   console.log("Toukokuu");
   break;
  case 6:
   console.log("Kesakuu");
   break;
  case 7:
   console.log("Heinakuu");
   break;
  case 8:
   console.log("Elokuu");
   break;
  case 9:
   console.log("Syyskuu");
   break;
  case 10:
   console.log("Lokakuu");
   break;
  case 11:
   console.log("Marraskuu");
   break;
  case 12:
   console.log("Joulukuu");
   break;
  default:
   console.log("Et antanut arvoa valilla 1-12")
 }
}


function testi4(etunimi,sukunimi, losoite, pnro, ptp, puh, email)
{
 this.etunimi = etunimi,
 this.sukunimi = sukunimi,
 this.lahiosoite = losoite,
 this.postinumero = pnro,
 this.postitoimipaikka = ptp,
 this.puhelinnumero = puh,
 this.sahkoposti = email
}
var Jyri = new testi("Jyri", "Lindroos",
"Keskikatu 3", "04200", "Kerava",
"0401744562", "jyri.lindroos@keuda.fi");
console.log(Jyri.sukunimi);


function testi5(teksti)
{
 var taulukkoteksti
 = Array.from(teksti);
 taulukkoteksti.sort();
 // .join —iiittaa
 //(") poistaa pilkut
 var text
 = taulukkoteksti.join(");
console.log(text);
}


function testi6(nimi, koe)
 if(koe < 50)
}console.log(nimi + " Hylätty");
 else if(koe < 60)
 }console.log(nimi + " Ti");
 else if(koe < 70)
 }console.log(nimi + " T2");
 else if(koe < 80)
 }console.log(nimi + " H3");
 else if(koe < 90)
 }console.log(nimi + " H4")•
 else
  console.log(nimi + " K5");
}
