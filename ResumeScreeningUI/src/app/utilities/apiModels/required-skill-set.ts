import {ClientRequirement} from './client-requirement';
export class RequiredSkillSet {
    requiresSkillSetID: number;
    clientRequirementID: number;
    resourceID: number;
    others: string;
    clientRequirement: ClientRequirement;
}
