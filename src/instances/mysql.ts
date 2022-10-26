//IMPORTANDO O SEQUELIZE 
import {Sequelize} from 'sequelize' 
//IMPORTANDO O DETENV
import dotenv from 'dotenv'

dotenv.config()

//CRIANDO UMA CONSTANTE PARA CONFIGURAR O BANCO 
export const sequelize = new Sequelize (
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,

{
    dialect:'mysql',
    port: parseInt(process.env.MYSQL_PORT as string) 
}
)