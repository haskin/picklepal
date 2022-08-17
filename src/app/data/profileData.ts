import { Profile, SkillLevel } from "../model/profile";

export const profileData: Profile[] = [
    {
        photo: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3831645.jpg&fm=jpg",
        name: "Louis",
        age: 82,
        skillLevel: SkillLevel.Beginner,
        description: "Likes long walks on the beach. Hurts his hip."
    },
    {
        photo: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg",
        name: "Stacy",
        age: 78,
        skillLevel: SkillLevel.Master,
        description: "Likes to crochet and look at pictures of her grandson."
    }
]