function kaanna()
{
  var lang = document.getElementById('kieli').value;
  if(lang == '')
  {
    document.write("Valitse kieli!");
  }
  else if(lang == 'en')
  {
    document.write("Hello world!");
  }
  else if(lang == 'se')
  {
    document.write("Hej världen!");
  }
  else {
    document.write("Hola Mundo!");
  }
}
