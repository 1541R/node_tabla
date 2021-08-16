const argv = require('yargs')
                .option( 'b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: 'true',
                    description: 'La base de la multiplicación'
                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'Muestra la tabla en forma de lista'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    description: 'Hasta qué número será la multiplicación'
                }

                )
                .check( (argv, options) =>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número'
                        }

                        if(isNaN(argv.b)){
                            throw 'Hasta, tiene que ser un número'
                        }
                        
                        return true
                })
                .argv;

module.exports = argv;