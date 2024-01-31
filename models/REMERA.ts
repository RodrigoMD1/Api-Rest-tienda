// models/remera.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface RemeraModel extends Document {
    titulo: string;
    precio: number;
    categoria:string;
    // * (NV1)
}

const remeraSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    // * (NV1)
});

const Remera = mongoose.model<RemeraModel>('Remera', remeraSchema);

export default Remera;
