import { Sequelize } from 'sequelize'
import { environments } from '../config/environments.js'


export const sequelize = new Sequelize(
    environments.DB.DB_NAME,
    environments.DB.DB_USER,
    environments.DB.DB_PASSWORD,
    {
        host: environments.DB.DB_HOST,
        dialect: environments.DB.DB_DIALECT,
        port: environments.DB.DB_PORT
    }
)

// Conexión a la base de datos
export async function connectDB() {
    try {
        await sequelize.sync({ force: false })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('Error al intentar conectar la base de datos', error)
    }
}