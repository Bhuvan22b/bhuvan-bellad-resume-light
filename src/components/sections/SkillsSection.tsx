
import { Code } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'C', level: 85, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-100' },
    { name: 'C++', level: 80, color: 'from-green-500 to-green-600', bgColor: 'bg-green-100' },
    { name: 'Python', level: 90, color: 'from-yellow-500 to-yellow-600', bgColor: 'bg-yellow-100' },
    { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-100' },
    { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-500', bgColor: 'bg-blue-100' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-500', bgColor: 'bg-yellow-100' },
    { name: 'SQL', level: 75, color: 'from-red-500 to-red-600', bgColor: 'bg-red-100' },
  ];

  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-red-400/20 to-pink-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="p-6 bg-gradient-to-r from-gray-50/80 to-white/80 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-800 text-lg">{skill.name}</span>
                    <div className={`px-3 py-1 ${skill.bgColor} rounded-full`}>
                      <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
