function ekatKymmenen()
{
  var kym = '<p>';
  for(var e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById('lukujenTulostus10').innerHTML = kym;
}
