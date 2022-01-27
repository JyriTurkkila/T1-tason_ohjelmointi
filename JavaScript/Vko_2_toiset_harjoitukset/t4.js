function laskenta()
  {
    var l1, l2, l3, l4, l5, summa, keskiarvo;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);

    var summa = ( l1 + l2 + l3 + l4 + l5 );
    console.log ( summa );
    var keskiarvo = ( summa / 5 );
    console.log ( keskiarvo );

    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Lukujen yhteenlaskettu summa on: " + summa);
    document.write("<br>Lukujen keskiarvo on: " + keskiarvo);

  }
