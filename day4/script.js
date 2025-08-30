const skills = [
  { name: "HTML", Proficiency: "Advanced" },
  { name: "CSS", Proficiency: "Advanced" },
  { name: "JavaScript", Proficiency: "Intermediate" },
  { name: "MERN", Proficiency: "Beginner" },
  { name: "java", Proficiency: "intermediate" },
];

function formatSkills(skillArray) {
  return skillArray.map((skill) => `${skill.name} (${skill.Proficiency})`);
}

const formattedSkills = formatSkills(skills);
const skillList = document.getElementById("list");

formattedSkills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.append(li);
});
