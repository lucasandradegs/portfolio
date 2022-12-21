import { Like } from "../models"

export const likeService = {
  create: async (userId: number, projectId: number) => {
    const like = await Like.create({
      userId,
      projectId
    })

    return like
  },

  delete: async (userId: number, projectId: number) => {
    await Like.destroy({
        where: {
            userId,
            projectId
        }
    })
  }
}