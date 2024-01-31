import { Request, Response } from 'express';
import Articulo from '../models/articulo';
import Remera from '../models/REMERA';
import Pantalon from '../models/Pantalones';
const { validarArticulo } = require("../helpers/validar");

export const crearArticulo = async (req: Request, res: Response) => {
    try {
        // * CUANDO TENGA QUE AGREGAR UNA NUEVA PARTE DEL FORMULARIO,AGREGAR ACA EL NOMBRE DE LA NUEVA PARTE (NV1)SIGNIFICA LUGARES DONDE SE AGREGAN 
        //*LOS NUEVOS NOMBRES
        const { titulo, precio, seccion,categoria } = req.body;

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
                nuevoArticulo = new Remera({ titulo, precio,categoria});
                break;
            case 'pantalon':
                // * (NV1)
                nuevoArticulo = new Pantalon({ titulo, precio,categoria });
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
