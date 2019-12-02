import { SkillSet } from './skill-set';
import { Proficiency } from './proficiency';

export class Suggestion{
    SuggestionID: number;
    SkillSetID: number;
    ProficiencyID: number;
    Sentence: string;
    IsSkill: boolean;
    SkillSet: SkillSet;
    Proficiency: Proficiency;
}