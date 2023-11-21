//Importar el cliente MongoDB
const mongo= require('mongodb').MongoClient;


// conexion
const conexion_local="mongodb://localhost:27017/"


// Establezco una nueva conexión con mongo
const cliente=new mongo(conexion_local)

// Indico la Base de Datos
const dbname="Productos"



const main= async() => {
    try{
        // Nos conectamos a MongoDB
        await cliente.connect();
        console.log(`He conseguido conectarme a MongoDB Produc ${conexion_local}`)
    } catch(fallo){
        console.error(`He tenido un problema en la operación: ${fallo}`)
    } finally {
        await cliente.close()
    }
};

main();
