 // Requires de paquetes-modulos instalados mediante npm
const express = require("express")
const bodyParser = require("body-parser")


// Requires de modulos diseñados por los desarrolladores
require('../imports/configurations/db-connection');
const rutasVacunas = require("../imports/api/vacunas/rutasVacunas");
const rutasEmpleados = require("../imports/api/empleados/rutasEmpleados");
const rutasLogin = require("../imports/api/login/rutasLogin");


// Inicia el servidor de express
const app = express();


/* Permite que heroku u otro host configure el puerto segun le parezca. En caso de que no se este desplegando la app,
el puerto sera asignado a 4000 */
const puerto = process.env.PORT || 4000;


// Es necesario situar el bodyParser como un middleware para poder recibir los datos enviados por el metodo POST 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// TODO: Incluir el login en el index.js

// ---- RUTAS ------//
// Las rutas deben estar separadas en la correspondiente carpeta Rutas para facil mantenibilidad.
app.use("/vacunas", rutasVacunas);
app.use("/empleados", rutasEmpleados);
app.use("/login", rutasLogin);

// Ruta a la pagina de inicio.
//app.get("/", (req,res) =>{
  //  res.send("Bienvenido. Esta conectado")
//})


// El servidor actualmente escucha en el puerto port.
app.listen(puerto,() =>{
    console.log(`Escuchando en el puerto ${puerto}`)
});