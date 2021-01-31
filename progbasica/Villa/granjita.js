var vm =document.getElementById("villamich");
var papel = vm.getContext("2d");
document.addEventListener("keydown", moverLobo);
alert('Que pedo, estoy modificando tu proyecto jiji');

var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo (e)
 {
     var movimiento = 64;
     var teclas = {
         LEFT: 37,
         UP: 38,
         RIGHT: 39,
         DOWN: 40
     }
     switch(e.keyCode)
     {
         case teclas.LEFT:
             xLobo = xLobo - movimiento;
             dibujar(xLobo, yLobo);
             break;
        case teclas.UP:
            yLobo = yLobo - movimiento;
            dibujar(xLobo, yLobo);
            break;
        case teclas.RIGHT:
            xLobo = xLobo + movimiento;
            dibujar(xLobo, yLobo);
            break;
        case teclas.DOWN:
            yLobo = yLobo + movimiento;
            dibujar(xLobo, yLobo);
            break;
     }
 }

var fondo = {
    url: "tile.png",
    cargaOK: false
}
var lobo = {
    url:"lobo.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOK: false
}
var pollo = {
    url: "pollo.png",
    cargaOK: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo,cargaOK = true;
    mantenerPosicion();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    mantenerPosicion();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    mantenerPosicion();
}

function mantenerPosicion()
{
    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(1, 5);
        for(var i=0; i < cantidad; i++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x = x * 70;
            y = y * 70;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }
    if(cerdo.cargaOK)
    {
        var cantidad = aleatorio(1, 5);
        for(var i=0; i < cantidad; i++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x = x * 70;
            y = y * 70;
            xCerdo[i] = x;
            yCerdo[i] = y;
        }
    }
    if(pollo.cargaOK)
    {
        var cantidad = aleatorio(1, 10);
        for(var i=0; i < cantidad; i++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x = x * 70;
            y = y * 70;
            xPollo[i] = x;
            yPollo[i] = y;
        }
    }
    dibujar();
}
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(var i=0; i < 10; i++)
        {
            papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
        }
    }
    if(cerdo.carga)
    {
        for(var i=0; i < 10; i++)
        {
            papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
        }
    }
    if(pollo.cargaOK)
    {
        for(var i=0; i < 10; i++)
        {
            papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }
    if(lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo)
    }
}
function aleatorio(max, min)
    {
        var numero_aleatorio = Math.floor(Math.random() * (max - min +1) + min);
        return numero_aleatorio;
    }








