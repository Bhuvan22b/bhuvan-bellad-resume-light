
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-red-50/50"></div>
      <div className="relative flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="p-2 hover:bg-gray-100 rounded-lg transition-colors" />
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-600 rounded-full blur-md opacity-30 scale-110"></div>
              <img 
                src="/lovable-uploads/3d81d3b8-a800-4c68-a378-4ebc722318b7.png" 
                alt="Bhuvan Bellad"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 md:border-4 border-white shadow-lg relative z-10 transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Bhuvan Bellad
              </h1>
              <p className="text-gray-600 text-xs md:text-sm font-medium">CS Engineering Student</p>
            </div>
          </div>
        </div>

        {/* Mobile profile info */}
        <div className="block sm:hidden">
          <h1 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Bhuvan Bellad
          </h1>
          <p className="text-gray-600 text-xs font-medium">CS Engineering Student</p>
        </div>

        <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
