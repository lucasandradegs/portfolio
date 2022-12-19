import { Sequelize } from "sequelize"

export const sequelize = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'personal_development',
    username: 'lucas',
    password: 'lucas',
    define: {
        underscored: true
    }
})