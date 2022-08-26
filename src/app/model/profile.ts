import { MatchType } from './matchType.enum';
import { SkillLevel } from './skillLevel.enum';

export interface Profile {
  id: number;
  photo: string;
  name: string;
  age: number;
  skillLevel: SkillLevel;
  description: string;
  matchType?: MatchType;
}
