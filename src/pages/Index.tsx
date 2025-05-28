
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '../components/AppSidebar';
import Header from '../components/Header';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-red-100 relative overflow-hidden w-full flex">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <AppSidebar onSectionClick={scrollToSection} />
        
        <SidebarInset className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 relative z-10 overflow-y-auto">
            <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8 md:space-y-12">
              <div id="about" className="scroll-mt-8">
                <AboutSection />
              </div>
              <div id="education" className="scroll-mt-8">
                <EducationSection />
              </div>
              <div id="skills" className="scroll-mt-8">
                <SkillsSection />
              </div>
              <div id="projects" className="scroll-mt-8">
                <ProjectsSection />
              </div>
              <div id="achievements" className="scroll-mt-8">
                <AchievementsSection />
              </div>
              <div id="contact" className="scroll-mt-8">
                <ContactSection />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
