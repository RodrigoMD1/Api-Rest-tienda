const { conectaBD } = require("./base-datos/conexion")
import express from "express";
import cors from "cors";
import { crearArticulo } from "./Controllers/articulo";
import { obtenerTodosLosArticulos, obtenerRemeras, obtenerPantalon } from './Controllers/articulo';

// inicializar app
console.log("App de node arrancada");

// conectar a la base de datos
conectaBD();

// Crear servidor Node
const app = express();
const PORT = 5000;

// configurar cors
app.use(cors());

// convertir body a objeto ts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

// crear rutas
app.post('/api/articulos', crearArticulo);

// esta son las rutas para pedir las colecciones 
app.get('/api/remeras', obtenerRemeras);
app.get('/api/pantalones', obtenerPantalon);
app.get('/api/articulos', obtenerTodosLosArticulos);

// crear servidor y escuchar peticiones http
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});



