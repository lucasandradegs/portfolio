import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

export interface Like {
  userId: number
  projectId: number
}

export interface LikeInstance extends Model<Like>, Like { }

export const Like = sequelize.define<LikeInstance, Like>('Like', {
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