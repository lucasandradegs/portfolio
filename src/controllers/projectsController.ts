import { Request, Response } from "express"
import { projectService } from "../services/projectService"

export const projectsController = {
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