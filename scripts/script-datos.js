let nombreNoviaCorto_1 = document.getElementById('nombre-novia-corto-1');
let nombreNovioCorto_1 = document.getElementById('nombre-novio-corto-1');
//let nombreNoviaCorto_2 = document.getElementById('nombre-novia-corto-2');
//let nombreNovioCorto_2 = document.getElementById('nombre-novio-corto-2');
let nombreNoviaCorto_3 = document.getElementById('nombre-novia-corto-3');
let nombreNovioCorto_3 = document.getElementById('nombre-novio-corto-3');
let diaBoda_1 = document.getElementById('dia-boda-1');
let mesBoda_1 = document.getElementById('mes-boda-1');
let añoBoda_1 = document.getElementById('año-boda-1');
let diaBoda_2 = document.getElementById('dia-boda-2');
let mesBoda_2 = document.getElementById('mes-boda-2');
let añoBoda_2 = document.getElementById('año-boda-2');
let nombreMomNovia = document.getElementById('nombre-mom-novia');
let nombreDadNovia = document.getElementById('nombre-dad-novia');
let nombreMomNovio = document.getElementById('nombre-mom-novio');
let nombreDadNovio = document.getElementById('nombre-dad-novio');
let nombreMadrin = document.getElementById('nombre-madrina');
let nombrePadrin = document.getElementById('nombre-padrino');
let fraseEspecial = document.getElementById('frase');
let direccionCeremonia = document.getElementById('ceremonia-direccion');
let horaCeremonia = document.getElementById('ceremonia-hora');
let direccionCelebracion = document.getElementById('celebracion-direccion');
let horaCelebracion = document.getElementById('celebracion-hora');
let boletosNumero = document.getElementById('numero-boletos');

/* EDICION DE PLANTILLA */

const datosBoda = {
    nombreNaCorto: "Abigail",
    nombreNoCorto: "José",
    dia: "1",
    mes: "Febrero",
    año: "2025",
    nombreMamaNovia: "Jenny Mariana Vargas Leon",
    nombrePapaNovia: "Eugenio Jacinto Cano Leon",
    nombreMamaNovio: "Olga Mariana Gómez Ortiz +",
    nombrePapaNovio: "José Antonio Vélez Caguano",
    nombreMadrina: "Jaqueline Ruiz Vela",
    nombrePadrino: "Daniel Torres",
    frase: "'Hay momentos en la vida que son muy especiales por sí solos, pero al compartirlos con personas tan especiales como tú, se convierten en momentos imposibles de olvidar'",
    ceremoniaDireccion: "Iglesia Evangelica La Paz de Dios, Guasmo Sur, Cooperativa Unión de Bananeros, Bloque 3, Manzana 369, Solar 8, Guayaquil, Ecuador",
    ceremoniaHora: "18:00 p.m.",
    celebracionDireccion: "el salon de eventos, 2 de Enero del 2025, Guasmo Central, Cooperativa Carlos Castro 2, Guayaquil, Ecuador",
    celebracionHora: "20:30 p.m.",
    numeroBoletos: "2"
}



/* Nombres pareja*/

nombreNoviaCorto_1.textContent = datosBoda.nombreNaCorto;
nombreNovioCorto_1.textContent = datosBoda.nombreNoCorto;
//nombreNoviaCorto_2.textContent = datosBoda.nombreNaCorto;
//nombreNovioCorto_2.textContent = datosBoda.nombreNoCorto;
nombreNoviaCorto_3.textContent = datosBoda.nombreNaCorto;
nombreNovioCorto_3.textContent = datosBoda.nombreNoCorto;

/* Fecha */

diaBoda_1.textContent = datosBoda.dia;
mesBoda_1.textContent = datosBoda.mes;
añoBoda_1.textContent = datosBoda.año;
diaBoda_2.textContent = datosBoda.dia;
mesBoda_2.textContent = datosBoda.mes;
añoBoda_2.textContent = datosBoda.año;

/* Datos de padres de pareja y padrinos */

nombreMomNovia.textContent = datosBoda.nombreMamaNovia;
nombreDadNovia.textContent = datosBoda.nombrePapaNovia;
nombreMomNovio.textContent = datosBoda.nombreMamaNovio;
nombreDadNovio.textContent = datosBoda.nombrePapaNovio;
nombreMadrin.textContent = datosBoda.nombreMadrina;
nombrePadrin.textContent = datosBoda.nombrePadrino;

/* frase */

fraseEspecial.textContent = datosBoda.frase;

/* Direcciones y horarios */

direccionCeremonia.textContent = datosBoda.ceremoniaDireccion;
horaCeremonia.textContent = datosBoda.ceremoniaHora;
direccionCelebracion.textContent = datosBoda.celebracionDireccion;
horaCelebracion.textContent = datosBoda.celebracionHora;

/* Pases/boletos */

boletosNumero.textContent = datosBoda.numeroBoletos;
