
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
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-10">
      <div className="p-6">
        <div className="text-center mb-8">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/3d81d3b8-a800-4c68-a378-4ebc722318b7.png" 
              alt="Bhuvan Bellad"
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Bhuvan Bellad</h1>
          <p className="text-gray-600 text-sm mt-1">CS Engineering Student</p>
        </div>
        
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className="w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 group"
                >
                  <Icon className="w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
