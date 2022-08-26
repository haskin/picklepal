import { MatchType } from '../model/matchType.enum';
import { Profile } from '../model/profile';
import { SkillLevel } from '../model/skillLevel.enum';

export const profileData: Profile[] = [
  {
    id: 1,
    photo:
      'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3831645.jpg&fm=jpg',
    name: 'Louis',
    age: 82,
    skillLevel: SkillLevel.Beginner,
    description: 'Likes long walks on the beach. Hurts his hip.',
    matchType: MatchType.Doubles,
  },
  {
    id: 2,
    photo:
      'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg',
    name: 'Stacy',
    age: 78,
    skillLevel: SkillLevel.Master,
    description: 'Likes to crochet and look at pictures of her grandson.',
    matchType: MatchType.All,
  },

  {
    id: 3,
    photo:
      'https://immortalmasks.com/shop/image/cache/catalog/!!2-21/ggrandpaprod1-800x800.jpg',
    name: 'Rufus',
    age: 69,
    skillLevel: SkillLevel.Beginner,
    description:
      'He had a strange appearance, almost as if it was contrived. He had sad, way worn eyes and a distinctive beard.',
    matchType: MatchType.Singles,
  },
  {
    id: 4,
    photo:
      'https://d2mjvz2lqjkhe7.cloudfront.net/as/assets-mem-com/cmi/8/3/8/1/10771838/20220531_203023413_0_orig.jpg/-/james-tucker-salem-or-obituary.jpg?srotate=90&crop=%2837.45833333333333%2C62.83333333333333%2C293.625%2C285.16666666666663%29&cropxunits=348&cropyunits=464&a.sharpen=2&a.balancewhite=true&maxheight=650',
    name: 'James',
    age: 72,
    skillLevel: SkillLevel.Advanced,
    description: 'delicately frail.',
    matchType: MatchType.All,
  },
  {
    id: 5,
    photo:
      'https://i.pinimg.com/originals/12/d0/ca/12d0ca7775035223018cf22ba0f29f13.jpg',
    name: 'Linda',
    age: 67,
    skillLevel: SkillLevel.Advanced,
    description: 'sarcastic and talented.',
    matchType: MatchType.All,
  },
  {
    id: 6,
    photo:
      'https://cdn.quotesgram.com/img/27/44/1707937700-Crazy-Funny-Old-Man-11-www_FunnyPica_com_.jpg',
    name: 'Richard',
    age: 73,
    skillLevel: SkillLevel.Intermediate,
    description: 'intelligent and venerable.',
    matchType: MatchType.Doubles,
  },
  {
    id: 7,
    photo:
      'https://cdn-acpnj.nitrocdn.com/SDkrhncnWeetGsYGlzwaPnbfptfOeIKk/assets/static/optimized/rev-00d8738/wp-content/uploads/2017/10/funny-old-people-images-2.jpg',
    name: 'Carol',
    age: 69,
    skillLevel: SkillLevel.Master,
    description: 'wicked and disagreeable.',
    matchType: MatchType.Singles,
  },
  {
    id: 8,
    photo:
      'https://i.pinimg.com/236x/de/50/d6/de50d6883e9caed5feb268cd8d4ddefd--smiling-faces-happy-faces.jpg',
    name: 'Charles',
    age: 67,
    skillLevel: SkillLevel.Beginner,
    description: 'blind and depraved.',
    matchType: MatchType.All,
  },
  {
    id: 9,
    photo:
      'https://img.freepik.com/premium-photo/happy-funny-cool-old-lady-with-fashionable-clothes-portrait-colored-background-youthful-grandmother-with-extravagant-style-concepts-about-lifestyle-seniority-elderly-people_186382-25711.jpg',
    name: 'Betty',
    age: 73,
    skillLevel: SkillLevel.Advanced,
    description: 'benevolent and gallant',
    matchType: MatchType.All,
  },
  {
    id: 10,
    photo:
      'https://thumbs.dreamstime.com/b/funny-looking-old-aged-man-portrait-29763056.jpg',
    name: 'Donald',
    age: 81,
    skillLevel: SkillLevel.Advanced,
    description: 'gray-haired and hatchet-faced.',
    matchType: MatchType.Singles,
  },
  {
    id: 11,
    photo:
      'https://www.askideas.com/wp-content/uploads/2016/11/Old-Woman-Wearing-Im-Still-A-Hot-Babe-Tshirt-Funny-Picture.jpg',
    name: 'Barbara',
    age: 72,
    skillLevel: SkillLevel.Advanced,
    description: 'gregarious and inquisitive.',
    matchType: MatchType.All,
  },
  {
    id: 12,
    photo:
      'https://cdn-acpnj.nitrocdn.com/SDkrhncnWeetGsYGlzwaPnbfptfOeIKk/assets/static/optimized/rev-00d8738/wp-content/uploads/2017/10/old-man-funny-pics-3.jpg',
    name: 'Arthur',
    age: 68,
    skillLevel: SkillLevel.Beginner,
    description: 'vindictive and portentous.',
    matchType: MatchType.All,
  },
];
