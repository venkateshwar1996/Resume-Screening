import { ActualSkillSet } from './actual-skill-set';
import { ExpertiseArea } from './expertise-area';
import { ProjectDetail } from './project-detail';
import { RequiredSkillSet } from './required-skill-set';

export class Resource {
    resourceID: number;
    resourceName: string;
    employeeID: number;
    experience: number;
    actualSkilSets: ActualSkillSet[];
    expertiseAreas: ExpertiseArea[];
    projectDetails: ProjectDetail[];
    requiredSkillSets: RequiredSkillSet[];
}
