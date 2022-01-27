function viikonpaiva()
{
  var arvo;
  arvo = parseInt(document.getElementById('luku').value);
  document.write("Antamasi viikonpäivän numero: " + arvo);
  if(arvo == 1 )
  { document.write("<br>Maanantai"); }
  if(arvo == 2 )
  { document.write("<br>Tiistai"); }
  if(arvo == 3 )
  { document.write("<br>Keskiviikko"); }
  if(arvo == 4 )
  { document.write("<br>Torstai"); }
  if(arvo == 5 )
  { document.write("<br>Perjantai"); }
  if(arvo == 6 )
  { document.write("<br>Lauantai"); }
  if(arvo == 7 )
  { document.write("<br>Sunnuntai"); }
}
