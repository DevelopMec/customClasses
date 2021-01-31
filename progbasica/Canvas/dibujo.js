var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, xf, yi, yf;
var nxf, nyf;
var colorcito = "green"

for(l = 0; l < lineas; l++)
{
    xf = 10 * l;
    yi = 10 * (l + 1);
    xi = 10 * l;
    yf = 10 * (l + 1);
    nxf = 300 - xf;
    nyf = 300 - yf;
    dibujarLinea(colorcito, xi, 300, 300, nyf);
    dibujarLinea(colorcito, 0, xf, nxf, 0);
    dibujarLinea(colorcito, 0, xf, yi, 300);
    dibujarLinea(colorcito, xi, 0, 300, yf); 
    console.log("linea + 1");
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 300, 300, 300);
dibujarLinea(colorcito, 300, 1, 1, 1);
dibujarLinea(colorcito, 1, 1, 1, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}