interface Profile {
    photo: string,
    name: string,
    age: number,
    skillLevel: SkillLevel,
    description: string
}
enum SkillLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Master = "Master"
}
export { Profile, SkillLevel }

