
import { User, GraduationCap, Code, Briefcase, Trophy, Mail } from 'lucide-react';

interface NavigationProps {
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ onSectionClick }: NavigationProps) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-xl shadow-2xl border-r border-gray-200/50 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-red-50/50"></div>
      <div className="relative p-6">
        <div className="text-center mb-8">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-600 rounded-full blur-md opacity-30 scale-110"></div>
            <img 
              src="/lovable-uploads/3d81d3b8-a800-4c68-a378-4ebc722318b7.png" 
              alt="Bhuvan Bellad"
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-2xl relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Bhuvan Bellad
          </h1>
          <p className="text-gray-600 text-sm mt-1 font-medium">CS Engineering Student</p>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mx-auto"></div>
        </div>
        
        <ul className="space-y-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="transform transition-all duration-200 hover:scale-105">
                <button
                  onClick={() => onSectionClick(item.id)}
                  className="w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-600 hover:text-white group hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="w-5 h-5 mr-3 group-hover:text-white transition-colors relative z-10" />
                  <span className="relative z-10 font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-red-600/10 rounded-xl border border-blue-200/50">
          <p className="text-xs text-gray-600 text-center">
            "Turning ideas into reality through code"
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
