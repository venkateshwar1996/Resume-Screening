import { ActualSkillSet } from './actual-skill-set';
import { ExpertiseArea } from './expertise-area';
import { ProjectDetail } from './project-detail';
import { RequiredSkillSet } from './required-skill-set';

export class Resource {
    ResourceID: number;
    ResourceName: string;
    EmployeeID: number;
    Experience: number;
    ActualSkilSets: ActualSkillSet[];
    ExpertiseAreas: ExpertiseArea[];
    ProjectDetails: ProjectDetail[];
    RequiredSkillSets: RequiredSkillSet[];
}
