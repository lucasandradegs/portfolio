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
                association: 'Videos',
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
    }
}