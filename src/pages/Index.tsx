
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
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
    <div className="min-h-screen bg-gray-50">
      <Navigation onSectionClick={scrollToSection} />
      
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div id="about">
            <AboutSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="achievements">
            <AchievementsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
