const elem_0 = document.querySelector('.elemento-0');
const elem_1 = document.querySelector('.elemento-1');
const elem_2 = document.querySelector('.elemento-2');
const elem_3 = document.querySelector('.elemento-3');
const elem_4 = document.querySelector('.elemento-4');
const elem_5 = document.querySelector('.elemento-5');
const elem_6 = document.querySelector('.elemento-6');
const elem_7 = document.querySelector('.elemento-7');
const elem_8 = document.querySelector('.elemento-8');
const elem_9 = document.querySelector('.elemento-9');
const elem_10 = document.querySelector('.elemento-10');
const elem_11 = document.querySelector('.elemento-11');
const elem_12 = document.querySelector('.elemento-12');
const elem_13 = document.querySelector('.elemento-13');
const elem_14 = document.querySelector('.elemento-14');
const elem_15 = document.querySelector('.elemento-15');
const elem_16 = document.querySelector('.elemento-16');
const elem_17 = document.querySelector('.elemento-17');
const elem_18 = document.querySelector('.elemento-18');
const elem_19 = document.querySelector('.elemento-19');
const elem_20 = document.querySelector('.elemento-20');
const elem_21 = document.querySelector('.elemento-21');
const elem_22 = document.querySelector('.elemento-22');
const elem_23 = document.querySelector('.elemento-23');
//const elem_24 = document.querySelector('.elemento-24');
const elem_25 = document.querySelector('.elemento-25');
const elem_26 = document.querySelector('.elemento-26');
const elem_27 = document.querySelector('.elemento-27');
const elem_28 = document.querySelector('.elemento-28');

const cargarElemento = (entradas, observador) => {
    //las entradas es un arreglo que va a contener informacion de los elementoes que está vigilando
    //en este caso, está vigilando 2 cards
    //revisar la informacion de cada uno de los dos, por si en algun momento se llega a necesitar
            //console.log(entradas);
            //console.log(observador);
    entradas.forEach( (entrada) => {
        if(entrada.isIntersecting == true) {
            entrada.target.classList.add('aplicar');
        }
    });
}

//creamos un anueva instancia de IntersectionObserver
//como primer parámetro se coloca la funcion antes creada
//como segundo parámetro se crea un objeto
const observador = new IntersectionObserver(cargarElemento, {

    //indica que se va a trabajar con el wiewport
    root: null,                 

    //indica si nuestro viewport va a tener cierto margen
    //se puede aumentar o reducir
    //ejecuta el codigo cuando el elemento entre dentro del margen
    //se especifica el margen, con pixeles se puede trabajar hasta con 4 valores: arriba, abajo, izquierda, derecha
    rootMargin: '30px 0px 0px 0px',
    
    //permite indeicar cuando queremos que ejecute el código
    //el codigo se ejecuta cuando el elemento tiene cierto porcentaje en la pantalla
    //tiene valores desde 0.0 hasta 1.0
    threshold: .8,
});

observador.observe(elem_0);
observador.observe(elem_1);
observador.observe(elem_2);
observador.observe(elem_3);
observador.observe(elem_4);
observador.observe(elem_5);
observador.observe(elem_6);
observador.observe(elem_7);
observador.observe(elem_8);
observador.observe(elem_9);
observador.observe(elem_10);
observador.observe(elem_11);
observador.observe(elem_12);
observador.observe(elem_13);
observador.observe(elem_14);
observador.observe(elem_15);
observador.observe(elem_16);
observador.observe(elem_17);
observador.observe(elem_18);
observador.observe(elem_19);
observador.observe(elem_20);
observador.observe(elem_21);
observador.observe(elem_22);
observador.observe(elem_23);
//observador.observe(elem_24);
observador.observe(elem_25);
observador.observe(elem_26);
observador.observe(elem_27);
observador.observe(elem_28);