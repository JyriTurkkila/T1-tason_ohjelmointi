function hipHeijaa()
{
  var tuloste = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=y+' ';
    }
    document.getElementById('lukujenTulostus').innerHTML = tuloste;
  }
}
