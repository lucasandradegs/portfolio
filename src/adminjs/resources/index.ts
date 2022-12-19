import { ResourceWithOptions } from "adminjs";
import { Category, Project, Video } from "../../models";
import { categoryResourceOptions } from "./category";
import { projectResourceOptions } from "./project";
import { videoResourceOptions } from "./video";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Project,
        options: projectResourceOptions
    },
    {
        resource: Video,
        options: videoResourceOptions
    }
]