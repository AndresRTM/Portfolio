export default function SkillsList({ skills }) {
    return (
        <ul className="skills-list">
            {skills.map((skill) => (
                <li key={skill.label}>
                    <i className={skill.icon}></i> {skill.label}
                </li>
            ))}
        </ul>
    );
}
