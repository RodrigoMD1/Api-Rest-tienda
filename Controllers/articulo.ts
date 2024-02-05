import { Request, Response } from 'express';
import Articulo from '../models/articulo';
import Remera from '../models/REMERA';
import Pantalon from '../models/Pantalones';
const { validarArticulo } = require("../helpers/validar");



// este permite solo mostrar en la peticion la coleccion de pantalones en caso de necesitar mas colecciones copiar este codigo y agregarlo en el index
export const obtenerPantalon = async (req: Request, res: Response) => {
    try {
        // Aquí obtén la colección de remeras desde la base de datos
        const pantalon = await Pantalon.find();  // Cambia 'Remera' con el modelo correcto

        // Responder solo con la colección de remeras
        res.status(200).json(pantalon);
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};


// este permite solo mostrar en la peticion la coleccion de remeras 
export const obtenerRemeras = async (req: Request, res: Response) => {
    try {
        // Aquí obtén la colección de remeras desde la base de datos
        const remeras = await Remera.find();  // Cambia 'Remera' con el modelo correcto

        // Responder solo con la colección de remeras
        res.status(200).json(remeras);
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// este consigue todas las colecciones que hay dentro de la base de datos igual hay que llamar a las colecciones 
export const obtenerTodosLosArticulos = async (req: Request, res: Response) => {
    try {
        // Aquí obtén todos los artículos desde la base de datos
        const articulos = await Articulo.find();
        const remeras = await Remera.find();
        const pantalon = await Pantalon.find(); // Cambia 'Articulo' con el modelo correcto

        // Responder con el array de artículos
        res.status(200).json([articulos, remeras, pantalon]);
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};






export const crearArticulo = async (req: Request, res: Response) => {
    try {
        // * CUANDO TENGA QUE AGREGAR UNA NUEVA PARTE DEL FORMULARIO,AGREGAR ACA EL NOMBRE DE LA NUEVA PARTE (NV1)SIGNIFICA LUGARES DONDE SE AGREGAN 
        //*LOS NUEVOS NOMBRES
        const { titulo, precio, seccion, categoria } = req.body;

        // Validar datos del formulario
        try {
            validarArticulo({ titulo });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "Faltan datos por enviar o los datos son inválidos"
            });
        }

        let nuevoArticulo;

        // Crear el nuevo artículo según la sección seleccionada
        switch (seccion) {
            case 'remera':
                // * (NV1)
                nuevoArticulo = new Remera({ titulo, precio, categoria });
                break;
            case 'pantalon':
                // * (NV1)
                nuevoArticulo = new Pantalon({ titulo, precio, categoria });
                break;
            default:
                return res.status(400).json({
                    status: "error",
                    mensaje: "Sección no válida"
                });
        }

        // Guardar en la base de datos
        await nuevoArticulo.save();

        // Responder con éxito
        res.status(201).json({ mensaje: 'Artículo agregado exitosamente' });
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};
