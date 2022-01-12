function paritonParillinen()
{
  var arvo;
  arvo = parseInt(document.getElementById('luku').value);
  document.write("Antamasi luku: " + arvo);
  if(arvo%2 == 0)
  {
    document.write("<br>Antamasi luku on parillinen");
  }
  else {
    document.write("<br>Antamasi luku on pariton");
  }
}
