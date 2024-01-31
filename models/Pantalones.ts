// models/pantalon.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface PantalonModel extends Document {
    titulo: string;
    precio: number;
    categoria:string;
    // * (NV1)
}

const pantalonSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    // * (NV1)
});

// aca en el pantalon ese ultimo es la coleccion que se va a crear en la base de datos 
const Pantalon = mongoose.model<PantalonModel>('Pantalon', pantalonSchema, 'pantalon');


export default Pantalon;
