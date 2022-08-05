alert ("Imprimir numeros del 1 al 100");

document.write ("Los numeros del 1 al 100 son:");

var divisible ={
cargaOK: false
} ;
false;
for (numero=1 ; numero <=100 ; numero++)
{
  divisible.cargaOK = false;
  if (numero % 3 == 0)
  {
   divisible.cargaOK = true;
  document.write ( "Fizz");
  }

 if (numero % 5 == 0)
 {
   divisible.cargaOK = true;
   document.write ("Buzz" )
 }

if (!divisible)
{

  document.write (numero);
}

 document.write (numero + "<br / > ");
}
