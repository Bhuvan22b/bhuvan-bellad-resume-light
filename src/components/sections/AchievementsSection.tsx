
import { Trophy, Award } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "2nd Place - College Ideathon",
      description: "Secured second position in an ideathon competition held at RV University, showcasing innovative thinking and problem-solving skills.",
      icon: Trophy,
      type: "Competition Win"
    },
    {
      title: "Semi-Finalist - IIT Kharagpur Hackathon",
      description: "Qualified to the semi-finals of a prestigious hackathon hosted by IIT Kharagpur. Worked on an AI/ML classification problem project.",
      icon: Award,
      type: "Hackathon Achievement"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Achievements</h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Icon className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                    {achievement.type}
                  </span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;
