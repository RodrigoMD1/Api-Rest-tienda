const mongoose = require("mongoose");

const conectaBD = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0/Tienda-Practica",);

        console.log("CONECTADO CORRECTAMENTE A LA BASE DE DATOS DE MI TIENDA-PRACTICA!!");
    } catch (error) {
        console.log(error);
        throw new Error("NO SE HA PODIDO CONECTAR A LA BASE DE DATOS");
    }
}

module.exports = {
    conectaBD
};