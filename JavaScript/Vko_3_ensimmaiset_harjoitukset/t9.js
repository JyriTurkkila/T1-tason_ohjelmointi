function etsiSuurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
