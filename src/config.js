import {config} from 'dotenv';
config(); //Con esto ya se puede leer el archivo env con las variables desde cualqier lugar del proyecto

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000; //Si la variable de entorno no esta definida entonces toma 3000. Cuando esté en la nube tomara el puerto que le asignen a travez de la variable de entorno.
