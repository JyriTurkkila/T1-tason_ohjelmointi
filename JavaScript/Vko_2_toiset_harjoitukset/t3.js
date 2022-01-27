function karkausvuosi(vuosi) {
  var arvo;
  arvo = parseInt(document.getElementById('vuosi').value);
  console.log(arvo);
  if (arvo % 4 == 0 && arvo % 100 == 0 || arvo % 400 == 0 )
  { document.write("<br>Antamasi vuosi on karkausvuosi"); }
  else
  { document.write("<br>Antamasi vuosi ei ole karkausvuosi"); }
}
