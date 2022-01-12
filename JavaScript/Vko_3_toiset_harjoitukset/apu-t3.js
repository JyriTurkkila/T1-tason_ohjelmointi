function teeLomake()
{
  var lomake = '<p>Anna tilinro:<input type="text" id="tilinro" value=""></p>';
  var lomake = lomake + '<p>Anna etunimi:<input type="text" id="enimi" value=""></p>';
  var lomake = lomake + '<p>Anna sukunimi:<input type="text" id="snimi" value=""></p>';
  var lomake = lomake + '<p>Anna saldo:<input type="text" id="saldo" value=""></p>';
  var lomake = lomake + '<p>Haluatko jatkaa (k/e):<input type="text" id="lopetus" value=""></p>';
  document.getElementById('lomake').innerHTML = lomake;
  laskuri = 0;
  lopetus = 'e';
  do {

    lopetus = document.getElementById('lopetus').value;
  }while(lopetus = 'k');

}
