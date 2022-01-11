var arvattava = Math.floor(Math.random()*10)+1;
var kerrat = 0;


window.onload= function alusta()
{
  var alustus = '';

  // viesti.innerHTML = (arvattava);
  for(var i = 1; i <=10; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      alustus += '<button class= "nayta" type="button" name="' + i +'" onclick="arvaa(this)" value = '+i+'>'+i+'</button>';
      if(i < 10 && j != 2)
      { i++; }
      else { j=3; }

    }
    alustus+= '<br>';
  }
  document.getElementById('tt').innerHTML = alustus;

}
function arvaa(arpa)
{
  kerrat++;
  var arvaus = arpa.value;
  if(kerrat <= 5)

  {
    if (arvaus < arvattava)
    { viesti.innerHTML = ('Valitsit liian pienen numeron'); }

    if (arvaus > arvattava)
    { viesti.innerHTML = ('Valitsit liian suuren numeron'); }

    if (arvaus == arvattava)
    { viesti.innerHTML = ('Oikein, käytit ' + kerrat + ' arvauskertaa'); }

    if (kerrat >= 5)
    { viesti.innerHTML = ('Käytit kaikki arvauskertasi'); }
  }
}
