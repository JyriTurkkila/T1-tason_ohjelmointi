// luodaan tuloslaskurimuuttuja
var laskuri = 0;
// luodaan laskurimuuttuja
var smerkki = 0;
// luodaan vanha-muuttuja vanhaa korttia varten
// eli verrataan uutta korttia ja vanhaa korttia
var vanha = -1;
// luodaan vanhan kortin alt-ominaisuutta varten muuttuja
var valtti;

function lataa()
{
  var laskuri = 0;
  var smerkki = 0;
  var vanha = -1;
  var merkit = 0;
  var X = 0;
  var Y = 0;
  var ruudut = 0;

  document.getElementById("pelialue").innerHTML = "";
}

// varsinaisen taulukon luonti-funktio, jota kutsutaan HTML:n onload-komennolla
function luoTaulukko(X,Y) {
var ruudut = X * Y;

if(ruudut==16) {
var merkit = ['kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png'];
}
if(ruudut==24) {
var merkit = ['kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png',
'kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png'];
}
if(ruudut==30) {
var merkit = ['kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png','kuva12.png','kuva13.png','kuva14.png',
'kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png','kuva12.png','kuva13.png','kuva14.png'];
}
if(ruudut==36) {
var merkit = ['kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png','kuva12.png','kuva13.png','kuva14.png','kuva15.png',
'kuva16.png','kuva17.png',
'kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png',
'kuva8.png','kuva9.png','kuva10.png','kuva11.png','kuva12.png','kuva13.png','kuva14.png','kuva15.png',
'kuva16.png','kuva17.png'];
}
console.log(merkit);
console.log(X , Y, ruudut);

  // Lis??t????n timeri
  setInterval(myTimer, 1000);
  function myTimer() {
  const d = new Date();
  document.getElementById("header").innerHTML = d.toLocaleTimeString();
}

/*
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);
*/


  // Sekoitetaan alkuper????inen taulukko
   sekoitetut = sekoita(merkit);
   // Haetaan HTML-sivulta paikka, johon peli tulee
   var paikka = document.getElementById('pelialue');
   // Luodaan peli?? varten taulukkoelementti
   var taulukko = document.createElement('table');
   // Luodaan peli varten taulukon sis??lt?? elementti
  var taulukonSisus = document.createElement('tbody');
  // Itse taulukon luominen, ulompi for tekee rivit ja sisempi sarakkeet
  for(var i = 0; i < X; i++)
  {
    // Luodaan rivielementti
    var rivi = document.createElement('tr');

    for(var j = 0; j < Y; j++)
    {
      // luodaan sarake-elementti
      var solu = document.createElement('td');
      // luodaan elementti, johon kortti asetetaan
      var sisus = document.createTextNode('');
      // M????????ritet????????n kortin alt-muuttuja, 0 - 15, eli jokaisella kortilla omansa
      solu.setAttribute('alt', sekoitetut[(smerkki)]);
      // M????????ritet????????n kortin id-muuttuja: solu+numero, esim. solu12
      solu.setAttribute('id', 'solu' + smerkki);
      // M????????ritet????????n kortin name-muuttuja 0 - 15, jokaisella omansa
      solu.setAttribute('name', smerkki);
      // M????????ritet????????n kortille onclick -toiminta, kutsutaan nayta-funktiota
      solu.setAttribute('onclick', 'nayta('+smerkki+');');
      // kasvatetaan laskuria yhhdell????
      smerkki += 1;
      // sy????tet????????n yll????olevat muutoksen kortin-tietoihin
      solu.appendChild(sisus);
      // sy????tet????????n yll????olavat muutokset rivin tietoihin
      rivi.appendChild(solu);
    }
    // sy????tet????????n rivit taulukon tbody-elementtiin
    taulukonSisus.appendChild(rivi);
  }
  // sy????tet????????n lopuksi taulukon tbody-elementti taulukkoon
  taulukko.appendChild(taulukonSisus);
  // Ja aivan viimeiseksi sy????tet????????n taulukko sille varattuun paikkaan
  paikka.appendChild(taulukko);
  // M????????ritet????????n taulukolle CSS-arvo border, joka on 2px
  // taulukko.setAttribute('border', '2');
}
// Valmiiksi annettu funktio, joka sekoittaa pakan.
function sekoita(taulukko)
{
    taulukko.sort(function(a, b){return 0.5 - Math.random()});
    return taulukko;
}
// Funktio, joka laitetaan jokaisen kortin onclick-toiminnoksi
function nayta(numero)
{
  // haetaan napautettu kortti
  var tunnus = document.getElementById('solu'+numero);
  // haetaan napautetun kortin alt-muuttuja
  var altti = tunnus.getAttribute('alt');
  // tarkistetaan, onko kortteja napautettu aiemmin
  if(vanha != -1)
  {
    // jos on, haetaan vanhan kortin alt-muuttuja
    valtti = vanha.getAttribute('alt');
  }
  else{
    // muussa tapauksessa sy??tet????n siihen -1
    valtti = vanha;
  }

  // sy????tet????????n napautetun taustan tilalle valitun kortin kuva
  tunnus.innerHTML = '<img src="webkuvat1/'+altti+'">';
  // tarkastetaan, onko edellinen kortti ja nykyinen kortti samoja (altit)
  if(altti == valtti){
    // mik????li ovat, haetaan nykyisen kortin alt-muuttuja
    var altti = tunnus.getAttribute('alt');
    // n????ytet????????n vanhakortti
    vanha.innerHTML = '<img src="webkuvat1/'+altti+'">';
    // n??ytet????n uusi kokrtti
    tunnus.innerHTML = '<img src="webkuvat1/'+altti+'">';
  }
  else{
    // muussa tapauksessa tehd????n nykyisest???? kortista vanha
    vanha = tunnus;
    // pys??ytet????n ohjelman suoritus hetkeksi
    odota(tunnus);
  }
}
// funktio, joka pys????ytt???????? ohjelman suorituksen 1000-millisekunniksi
function odota(joku) {
  // varsinainen pys????ytys funktio
  setTimeout(function(){
      // pys????ytyksen j????lkeen tyhjennet????????n nykyisen kortin tiedot
     joku.innerHTML = '';
     // Pys??ytyksen pituus 1000 ms = 1 sekunti
   }, 1000);

   // kasvatetaan tuloslaskuria yhdell??
   laskuri += 1;
   tulos.innerHTML = ('Olet yritt??nyt ' + parseInt(laskuri/2) + ' kertaa');

}
