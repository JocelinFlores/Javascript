alert ("Franco");
var teclas = {
  UP:   38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

console.log (teclas);
document.addEventListener ("keydown", dibujarTeclado);
var x=150;
var y=150;
var cuadrito = document.getElementById("teclado");
var papel = cuadrito.getContext("2d");



function dibujarlinea (color, xinicial,yinicial,xfinal,yfinal,lienzo)
{

  lienzo.beginPath ();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo (xinicial,yinicial);
  lienzo.lineTo (xfinal,yfinal);
  lienzo.stroke ();
  lienzo.closePath ();
}
dibujarlinea("grey",149,149,151,151,papel);
  var pinocho =1;

function dibujarTeclado(evento)
{

  if (evento.keyCode== teclas.UP)
  {
   dibujarlinea("pink",x,y,x,y-pinocho,papel);
   y = y - pinocho;
  console.log ("Estas presionando la flecha de arriba");
  }




if (evento.keyCode==teclas.DOWN)
  {
    dibujarlinea("pink",x,y,x,y + pinocho,papel);
    y = y + pinocho;
    console.log ("Estas presionando la flecha de abajo");
  }




    if (evento.keyCode== teclas.LEFT)
  {
    dibujarlinea("pink",x,y,x-pinocho,y,papel);
    x = x - pinocho;
    console.log ("Estas presionando la flecha izquierda");
  }





  if (evento.keyCode==teclas.RIGHT)
  {
  dibujarlinea("pink", x,y,x+ pinocho,y,papel);
  x=x+pinocho;
  console.log ("Estas presionando la flecha derecha");
  }
  console.log ("Tecla oprimida");
  console.log (evento.keyCode);
  }
