const validator = require("validator");

interface Parametros {
    titulo: string;
}

const validarArticulo = (parametros: Parametros) => {
    let validar_titulo =
        !validator.isEmpty(parametros.titulo) &&
        validator.isLength(parametros.titulo, { min: 3, max: undefined });

    console.log(parametros);

    if (!validar_titulo) {
        throw new Error("No se ha validado la información !!");
    }
};

module.exports = {
    validarArticulo,
};
