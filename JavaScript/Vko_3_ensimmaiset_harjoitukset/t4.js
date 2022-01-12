function laskeKertoma()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for(var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
