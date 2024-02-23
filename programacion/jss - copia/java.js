//var nombre ="tadeo";
//var edad=20;

//let apellido ="granados"
//let estatura=1.80;

//const ESCUELA ="TECNM ROQUE"
//console.log("nombre:"+ nombre);
//console.log("edad:"+ edad);


//console.log("apellido" + apellido);
//console.log("estatura"+ estatura);

//console.log(ESCUELA);


//let string ='cadenas de texto';
//let boolean=true;
//let boolean2=false;
//let number=10;
//let number2=20.4;
//let bigInt = BigInt(10);
//let symbols =Symbol('simbolo 1')
//let arrays =[1,20,30,40];
//let arrays2 =[1,'otros datos',false];
//let object={};

//console.log(string,boolean,boolean2,number,number2,bigInt,symbols,arrays,arrays2,object);


let student={
name:'tadeo',
lastname: 'granados',
age:20,
topic:['programacion web','bases de datos',],

assesments:{
    webdevelopern:10,
math:9,
},

};

// valores del objeto
//console.log(student);
//console.table(student);
let nullables =null;
let undef=undefined;
console.log(student['name']);
console.log(student.name);
console.log(student.property1);
console.log(student);

//student.name='pedro';
//console.log(student.name);


//let name='pepe';
//let age=23;

    //let student2 ={
        //name1:name,
        //age:age,
        
    //};
    //delete student.name;
    //let nombre=student.name;
    //let edad=student.age;
    //let{name:nombre,age:edad}=student;
    //let{}=student;
    //destructurizar 
    //let{name2,age2}=student;
    //console.log(student2);
    //eliminar propiedades (taipo)
    //let{name2,...student2}=student;

    let obj1={
        propobj1:'values 1'
    };
    let obj2={
        propobj2:'values 2'
    };
    let obj3={
        prop3:'values 3',
        ...obj1,
        ...obj2,
    };
    console.table(obj3)
 
