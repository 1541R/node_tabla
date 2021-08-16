const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    
    try {
        let salida = '';
        const h = hasta + 1;
        for (let index = 1; index < h; index++) {
            const result = base * index;
            salida += `${base} x ${index} = ${result} \n`;
        }
        
        if(listar) { 
            console.log(`======== TABLA DEL ${base} ======`.rainbow);
            console.log(salida)
        };

        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida);
        return `Tabla del ${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
}