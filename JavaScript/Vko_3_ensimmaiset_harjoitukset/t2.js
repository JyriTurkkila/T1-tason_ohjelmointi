function muutaSalasanaksi()
{
  var ksana = document.getElementById('ksana').value;
  var salasana = "<p>";
  for(var j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
