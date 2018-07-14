const fs = require('fs');
const colors = require('colors');

let listarTabla=(base,limite =10 /* = 10 --> para darle un valor por defecto pero ya viene el 10 de antemano*/)=>{

    console.log('============================'.rainbow.bgCyan);
    console.log(`Tabla de ${base}`.trap.bgGreen);
    console.log('============================'.zebra);
    console.log('============================'.america);
    console.log('============================'.random);

    for (let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
};

let crearArchivo=(base, limite=10)=>{
    return new Promise((resolve, reject)=>{
        if (!Number(base)){
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        let data='';
        for (let i=1;i<=limite;i++){
            data+=(`${base} * ${i} = ${base*i}\n`);
        };

        fs.writeFile(`tablas/tabla del ${base} al ${limite}.txt`, data, (err) => {
            if (err) return reject(err);
            else
            resolve(`El archivo: `+`tabla del ${base}.txt con limite ${limite} ha sido creado`.rainbow.bgCyan);
        });
    })
};

module.exports={
    crearArchivo,
    listarTabla
};
