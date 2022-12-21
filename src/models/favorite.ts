import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { ProjectInstance } from "./Project"
import { UserInstance } from "./user"

export interface Favorite {
  userId: number
  projectId: number
}

export interface FavoriteInstance extends Model<Favorite>, Favorite {
  Project?: ProjectInstance
  User?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>('Favorite', {
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  projectId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'projects',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})