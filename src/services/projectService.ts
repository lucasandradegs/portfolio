import { Op } from "sequelize"
import { Project } from "../models"

export const projectService = {
    findByIdWithVideos: async (id: string) => {
        const projectWithVideos = await Project.findByPk(id, {
            attributes: [
                'id',
                'name', 
                'synopsis', 
                ['thumbnail_url', 'thumbnailUrl']
            ],
            include: {
                association: 'videos',
                attributes: [
                    'id',
                    'name',
                    'synopsis', 
                    'order',
                    ['video_url', 'videoUrl'],
                    ['seconds_long', 'secondsLong']
                ],
                order: [['order', 'ASC']],
                separate: true
            }
        })

        return projectWithVideos
    },

    getRandomFeaturedProjects: async () => {
        const featuredProjects = await Project.findAll({
            attributes: [
                'id',
                'name', 
                'synopsis', 
                ['thumbnail_url', 'thumbnailUrl']
            ],
            where: {
                featured: true
            }
        })

        const randomFeaturedProjcts = featuredProjects.sort(() => 0.5 - Math.random())

        return randomFeaturedProjcts.slice(0, 3)
    },

    getTopTenNewest: async () => {
        const projects = await Project.findAll({
            limit: 10,
            order: [['created_at', 'DESC']]
        })

        return projects
    },

    findByName: async (name: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage
        const { count, rows } = await Project.findAndCountAll({
            attributes: [
                'id',
                'name', 
                'synopsis', 
                ['thumbnail_url', 'thumbnailUrl']
            ],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            limit: perPage,
            offset
        })

        return {
            projects: rows,
            page,
            perPage,
            total: count
        }
    }
}