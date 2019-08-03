//requireds
//const fs = require('fs'); //fs es file system, propio de node
// const fs = require('express'); -->paquete que no esta en libreria nativa pero que tambien se importará
// const fs = require('./fs'); --> o const fs = require('../fs'); --> importacion de archivos
const { crearArchivo, listarTabla }= require('./multiplicar/multiplicar');
// const {listaCanales}=require('./canalessecuencialista/canalesenlista');
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
            .catch(error=>console.log(error.bgWhite.red));
        break;
    case []:
        console.log(`el comando ${ comando } no esta disponible entre las opciones\n use nmp app --help para ver los comandos`);
        break;
    default:
        console.log('comando no reconocido,\npuede usar los comandos listar para ver los parametros definidos \no crear para crear parametro.\nejemplo de uso: node app listar -b={numero} -l{limite de tabla}'.red.bgWhite);
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
