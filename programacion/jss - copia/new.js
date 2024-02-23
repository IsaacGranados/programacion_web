//primer ejemplo
let nombrevariable='valor variable';
var nombrevariable2=10;
let object={
    propiedad1:10,
    propiedad2:'valor porpiedad2',
    propiedadobjeto:{
        propiedad4:['valor','valor2','valor3'],
        propiedad5: 'valor propiedad5',
    }
};
console.log(object);
console.log(object.propiedad1);
console.log(object.propiedadobjeto.propiedad5);
//aqui se acaba el ejemplo1
//palabras recervadas
//funcion sin parametros
function nombredefuncion(){
    console.log('ejecutando funcion "nombrefuncion');
}
//funcion con  parametros
function nombreparametros(nombre,apellido,edad){
   let text='nombre:'+nombre+',apellido:'+apellido+',edad:'+edad;
    console.log(text);
}
//llama a la funcion
nombredefuncion();
//llama a la funcion con parametros
nombreparametros('tadeo','granados',20);
//termina funcion
/**
 * Retorna el cuadro de el numero dado
 * @param number number 
 * @returns 
 */
function square(number){
return number * number;
}
/**
 * retorno el cubo del numero dado
 * @param {number} number 
 * @returns 
 */
function cube(number){
return number * number * number;
}
let arrays=[2];
let squarevalue=square(8);
console.log(square(8));
console.log(cube(8));
//termina el programa
//porque para que da muchos decimales
let result=0.1+0.2;
console.log(result);
/**
 * ciclos
 * @param {number} number 
 * @returns 
 */
//for
for(let index =0; index <11; index++){
let number = 10*index;
console.log(number);
}
//while
let indexwhile = 0;
while(indexwhile < 11){
    let number = indexwhile * 10;
    console.log(number);
    indexwhile++;
}
//do-while
let indexdowhile=0;
do{
    let number=indexwhile*10;
    console.log(number);
    indexdowhile++;
}    while(indexdowhile<10);
function tablademultiplicarfor(tabla,limite){
    for(let index=0;)
}
function tablademultiplicarfor(tabla,limite){

}
function tablademultiplicarfor(tabla,limite){
    let number=0;
    do{
        let number=indexdowhile*tabla;
        console.log(number);
        indexdowhile++;

    }while(indexdowhile<limite);
}
tablademultiplicarfor(8,100);
tablademultiplicarwhile(8,10);
tablademultiplicardowhile(7,5);