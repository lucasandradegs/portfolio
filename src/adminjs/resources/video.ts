import { ResourceOptions } from "adminjs";

export const videoResourceOptions: ResourceOptions = {
  navigation: 'Projetos',
  editProperties: ['name', 'synopsis', 'projectId', 'order', 'uploadVideo', 'secondsLong'  ],
  filterProperties: ['name', 'synopsis', 'projectId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'projectId', 'order', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'projectId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}