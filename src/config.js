import {config} from 'dotenv'

config()


export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3606
export const DB_USER = process.env.DBUSER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || '0303'
export const DB_DATABASE = process.env.companydb || 'companydb'

