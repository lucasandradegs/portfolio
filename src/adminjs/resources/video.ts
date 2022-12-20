import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const videoResourceOptions: ResourceOptions = {
  navigation: 'Projetos',
  editProperties: ['name', 'synopsis', 'projectId', 'order', 'uploadVideo', 'secondsLong'  ],
  filterProperties: ['name', 'synopsis', 'projectId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'projectId', 'order', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'projectId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}

export const videoResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, '..', '..', '..', 'uploads')
            }
        },
        properties: {
            key: 'videoUrl',
            file: 'uploadVideo'
        },
        uploadPath: (record, filename) => `watch/project-${record.get('projectId')}/${filename}`
    })
]