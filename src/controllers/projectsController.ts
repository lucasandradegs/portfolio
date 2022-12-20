import { Request, Response } from "express"
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

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try{
            const project = await projectService.findByIdWithVideos(id)
            return res.json(project)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}