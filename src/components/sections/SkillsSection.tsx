
import { Code } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'C', level: 85, color: 'bg-blue-500' },
    { name: 'C++', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-400' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
    { name: 'SQL', level: 75, color: 'bg-purple-500' },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${skill.color} transition-all duration-300`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
