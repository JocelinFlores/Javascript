var d = document.getElementById ("dibujito");

var texto = document.getElementById ("texto_lineas");
var b = document.getElementById ("botoncito");
b.addEventListener("click", dibujoPorClick );

var lienzo = d.getContext ("2d");

function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath ();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke ();
  lienzo.closePath ();
}

function dibujoPorClick()
{
  var usuario;
  var pixeles = d.width;
  alert ("Pixeles" + pixeles);
  usuario = pixeles / lineas;

  var lineas= parseInt(texto.value);
  var linea= 15;
  var linicial = 0;
  let yi,xf;
  var colorcito = "#2E64FE";
  var colorete = "#81F781";
  var color = "#D0A9F5";


  for (linicial = 0; linicial< lineas; linicial++)
  {
    xi = 300 - (10 * linicial);
    yf = 300 - (10 * linicial);
    dibujarlinea (colorete, xi, 0, 300, yf);
    yi = 10 * linicial;
    xf = 10 * (linicial + 1);
    dibujarlinea (colorete, 0, yi, xf, 300);
    yi = 10 * linicial;
    xf = 300 - (10 * linicial);
    dibujarlinea (colorcito, 300, yi, xf, 300);
    yi = 300 - (10 * linicial);
    xf = 10 * linicial;
    dibujarlinea (colorcito, 0 , yi , xf ,0);
    console.log ("linea " + linicial);
  }

  for (linicial = 0; linicial< linea; linicial++)
  {
    yi = 10 * linicial;
    xf = 150 - (10 * linicial);
    dibujarlinea (color, 150, yi, xf, 150);
    yi = 10 * linicial;
    xf = 150 + (10 * linicial);
    dibujarlinea (color, 150, yi, xf, 150);
    xi = 150 - (10 * linicial);
    yf = 300 - (10 * linicial);
    dibujarlinea (color, xi, 150, 150, yf);
    yf = 300 - (10 * linicial);
    xf = 150 + (10 * linicial);
    dibujarlinea (color, 150, yf, xf, 150);


    console.log ("linea " + linicial);
  }
  dibujarlinea (colorcito, 1,1,1,300);
  dibujarlinea (colorcito, 0,299,299,299);
  dibujarlinea (colorete, 1,1,300,1);
  dibujarlinea (color, 0,150,150,150);
  dibujarlinea (color, 150,0,150,150);
  dibujarlinea (color,150,150,300,150)
// Estas 3 lineas podrias borrarlas
 var ingresar_valor = parseInt(texto.value); //Esta variable nos permite tomar el valor que desee el usuario
 console.log (texto);
 alert("no me toques" + ingresar_valor);
}
