
import { User, GraduationCap, Code, Briefcase, Trophy, Mail } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  onSectionClick: (sectionId: string) => void;
}

const AppSidebar = ({ onSectionClick }: AppSidebarProps) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <Sidebar className="border-r border-gray-200/50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-red-50/50"></div>
      <SidebarContent className="relative">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onSectionClick(item.id)}
                      className="w-full flex items-center px-3 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-600 hover:text-white group hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                      tooltip={item.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className="w-5 h-5 group-hover:text-white transition-colors relative z-10 min-w-[20px]" />
                      <span className="relative z-10 font-medium ml-3 group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 group-data-[collapsible=icon]:hidden">
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-red-600/10 rounded-xl border border-blue-200/50">
            <p className="text-xs text-gray-600 text-center">
              "Turning ideas into reality through code"
            </p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
