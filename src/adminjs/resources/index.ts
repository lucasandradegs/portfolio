import { ResourceWithOptions } from "adminjs";
import { features } from "process";
import { Category, Project, User, Video } from "../../models";
import { categoryResourceOptions } from "./category";
import { projectResourceFeatures, projectResourceOptions } from "./project";
import { userResourceOptions } from "./user";
import { videoResourceFeatures, videoResourceOptions } from "./video";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Project,
        options: projectResourceOptions,
        features: projectResourceFeatures
    },
    {
        resource: Video,
        options: videoResourceOptions,
        features: videoResourceFeatures
    },
    {
        resource: User,
        options: userResourceOptions
    }
]