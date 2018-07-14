//requireds
//const fs = require('fs'); //fs es file system, propio de node
// const fs = require('express'); -->paquete que no esta en libreria nativa pero que tambien se importará
// const fs = require('./fs'); --> o const fs = require('../fs'); --> importacion de archivos
const { crearArchivo, listarTabla }= require('./multiplicar/multiplicar');
const argv=require('./config/yargs').argv;
const colors = require('colors');



let comando=argv._[0];

switch (comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log(`Archivo creado: ${archivo}`))
            .catch(error=>console.log(error));
        break;
    default:
        console.log('comando no reconocido')
}







//let base='qwerty';
//let data='';


/*for (let i=1;i<11;i++){
    data+=(`${base} * ${i} = ${base*i}\n`);
};

fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla del ${base}.txt ha sido creado`);
});*/

//console.log(process.argv)
//let argv2= process.argv;

//console.log(argv);
//console.log(argv2);
// let parametro=argv[2];
// let base=parametro.split('=')[1];

//console.log(base);


/*
crearArchivo(base)
    .then(archivo=>console.log(`Archivo creado: ${archivo}`))
    .catch(error=>console.log(error));
*/
