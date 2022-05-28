import {Schema, model} from 'mongoose';

const schema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
},{
    timestamps: true //Al crear un dato en la base se guardan dos propiedades adicionales, una indica la fecha y hora cuando el dato fue creado y otra la fecha y hora de la ultima actualización
});

export default model('Note', schema);

