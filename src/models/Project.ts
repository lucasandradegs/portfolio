import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database'

export interface Project {
    id: number
    name: string
    synopsis: string
    thumbnailUrl: string
    featured: boolean
    categoryId: number
}

export interface ProjectCreationAttributes extends Optional<Project, 'id' | 'thumbnailUrl' | 'featured' > {}

export interface ProjectInstance extends Model<Project, ProjectCreationAttributes>, Project {}

export const Project = sequelize.define<ProjectInstance, Project>('Project', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      thumbnailUrl: {
        type: DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: DataTypes.BOOLEAN
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
})