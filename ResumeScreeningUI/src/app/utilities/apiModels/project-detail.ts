import { ProjectTechnology } from './project-technology';
import { Responsibility } from './responsibility';

export class ProjectDetail {
    projectID: number;
    resourceID: number;
    clientName: string;
    projectDescription: string;
    clientDescription: string;
    projectTechnologies: ProjectTechnology[];
    responsibilities: Responsibility[];
}
