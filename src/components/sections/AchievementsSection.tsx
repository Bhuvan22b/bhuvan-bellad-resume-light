
import { Trophy, Award, Star, Crown } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "2nd Place - College Ideathon",
      description: "Secured second position in an ideathon competition held at RV University, showcasing innovative thinking and problem-solving skills.",
      icon: Trophy,
      type: "Competition Win",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      title: "Semi-Finalist - IIT Kharagpur Hackathon",
      description: "Qualified to the semi-finals of a prestigious hackathon hosted by IIT Kharagpur. Worked on an AI/ML classification problem project.",
      icon: Award,
      type: "Hackathon Achievement",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    }
  ];

  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-red-400/20 to-pink-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Achievements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group">
                  <div className={`p-6 bg-gradient-to-r ${achievement.bgGradient} rounded-2xl border-2 border-gradient-to-r from-yellow-200/50 to-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="flex items-start space-x-6 relative z-10">
                      <div className={`p-4 bg-gradient-to-r ${achievement.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {achievement.title}
                          </h3>
                          <span className={`px-3 py-1.5 bg-gradient-to-r ${achievement.gradient} text-white text-sm rounded-full font-semibold shadow-lg`}>
                            {achievement.type}
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{achievement.description}</p>
                        
                        <div className="flex items-center gap-1 mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                          <span className="ml-2 text-sm text-gray-600 font-medium">Excellence Recognition</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
