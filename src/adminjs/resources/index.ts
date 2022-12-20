import { ResourceWithOptions } from "adminjs";
import { features } from "process";
import { Category, Project, Video } from "../../models";
import { categoryResourceOptions } from "./category";
import { projectResourceFeatures, projectResourceOptions } from "./project";
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
    }
]