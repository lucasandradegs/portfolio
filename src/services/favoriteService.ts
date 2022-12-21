import { Favorite } from "../models/favorite"

export const favoriteService = {
    findByUserId:async (userId: number) => {
        const favorites = await Favorite.findAll({
            attributes: [['user_id', 'userID']],
            where: { userId },
            include: {
                association: 'Project',
                attributes: [
                    'id', 
                    'name',
                    'synopsis', 
                    ['thumbnail_url', 'thumbnailUrl']
                ]
            }
        })
        
        return {
            userId,
            projects: favorites.map(favorite => favorite.Project)
        }
    },
	create: async (userId: number, projectId: number) => {
    const favorite = await Favorite.create({
      userId,
      projectId
    })

    return favorite
  },
}