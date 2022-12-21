import { Request, Response } from "express"
import { getPaginationParams } from "../helpers/getPaginationParams"
import { AuthenticatedRequest } from "../middlewares/auth"
import { favoriteService } from "../services/favoriteService"
import { likeService } from "../services/likeService"
import { projectService } from "../services/projectService"

export const projectsController = {
    featured: async (req: Request, res: Response) => {
        try{
            const featuredProjects = await projectService.getRandomFeaturedProjects()
            return res.json(featuredProjects)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    newest: async (req: Request, res: Response) => {
        try{
            const newestProjects = await projectService.getTopTenNewest()
            return res.json(newestProjects)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = getPaginationParams(req.query)
        try{
            if(typeof name !== 'string') throw new Error('name param must be of type string')
            const projects = await projectService.findByName(name, page, perPage)
            return res.json(projects)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    show: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const projectId = req.params.id

        try{
            const project = await projectService.findByIdWithVideos(projectId)

            if (!project) return res.json({ message: 'Projeto não encontrado' })
            
            const liked = await likeService.isLiked(userId, Number(projectId))
            const favorited = await favoriteService.isFavorited(userId, Number(projectId))
            return res.json({...project.get(), favorited, liked})
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}