import { SkillLevel } from './skillLevel.enum';

export interface Profile {
  photo: string;
  name: string;
  age: number;
  skillLevel: SkillLevel;
  description: string;
}
