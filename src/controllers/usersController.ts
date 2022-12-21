import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";

export const usersController = {
    show: async (req: AuthenticatedRequest, res: Response) => {
        const currentUser = req.user!

        try {
            return res.json(currentUser)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json( {message: err.message})
            }
        }
    }
}