import { ProjectTechnology } from './project-technology';
import { Responsibility } from './responsibility';

export class ProjectDetail {
    ProjectID: number;
    ResourceID: number;
    ClientName: string;
    ProjectDescription: string;
    ClientDescription: string;
    ProjectTechnologies: ProjectTechnology[];
    Responsibilities: Responsibility[];
}
