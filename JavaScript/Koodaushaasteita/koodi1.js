var Nyt = 0;
var Syntymaaika = 0;
var a = 28;
var b = 5;
var c = 1968;

function tehtavaKuusi(a, b, c){

 function muutaVuodet(c)
 {
  return c * 365.25;
 }
 function muutaKuukaudet(b)
 {
  switch(b-1);
  {
   case 0:
    return 0;
    break;
   case 1:
    return 31;
    break;
   case 2:
    return 59;
    break;
   case 3:
    return 90;
    break;
   case 4:
    return 120;
    break;
   case 5:
    return 151;
    break;
   case 6:
    return 181;
    break;
   case 7:
    return 212;
    break;
   case 8:
    return 243;
    break;
   case 9:
    return 273;
    break;
   case 10:
    return 304;
    break;
   case 11:
    return 334;
    break;
   default:
   return 0;
 }
}

 Syntymaaika = muutaVuodet(c) + muutaKuukaudet(b) + a;
 Nyt = muutaVuodet(2021) + muutaKuukaudet(3)+ 25;
 console. log(Nyt—Syntymaaika);
}
