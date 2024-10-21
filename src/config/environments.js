import 'dotenv/config'

export const environments = {
    PORT: process.env.PORT || 4000,
    SECRET_KEY: process.env.SECRET_KEY || 'ññññ',
    DB: {
        DB_NAME: process.env.DB_NAME || 'ecommerce',
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASSWORD: process.env.DB_PASSWORD || '',
        DB_PORT: process.env.DB_PORT || 3306,
        DB_DIALECT: process.env.DB_DIALECT ||'mysql',
    },
    API_URL: process.env.API_URL || '',
    API_KEY: process.env.API_KEY 
}