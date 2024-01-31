import mongoose, { Document, Schema } from 'mongoose';

export interface ArticuloModel extends Document {
    titulo: string;
    precio: number;
}

const articuloSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
});

const Articulo = mongoose.model<ArticuloModel>('Articulo', articuloSchema);

export default Articulo;