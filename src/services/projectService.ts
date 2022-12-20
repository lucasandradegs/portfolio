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
    }
}