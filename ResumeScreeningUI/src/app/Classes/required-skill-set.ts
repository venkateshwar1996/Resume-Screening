import {ClientRequirement} from './client-requirement';
export class RequiredSkillSet {
    RequiresSkillSetID: number;
    ClientRequirementID: number;
    ResourceID: number;
    Others: string;
    ClientRequirement: ClientRequirement;
}
