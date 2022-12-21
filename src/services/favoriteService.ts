import { Favorite } from "../models/favorite"

export const favoriteService = {
	create: async (userId: number, projectId: number) => {
    const favorite = await Favorite.create({
      userId,
      projectId
    })

    return favorite
  },
}