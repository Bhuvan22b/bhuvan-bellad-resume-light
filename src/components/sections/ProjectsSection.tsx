
import { ExternalLink, Globe, Code, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Digital Transformation of India",
      description: "An informative website showcasing 29 innovative technologies built in India, including detailed explanations of how they work, user adoption statistics, and economic impact analysis.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Comprehensive coverage of 29 Indian technologies",
        "User adoption statistics and economic impact data",
        "Interactive and informative design"
      ],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Personal Resume Website",
      description: "A modern, responsive resume website built with React and TypeScript, featuring a clean design and smooth navigation.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Modern and responsive design",
        "Smooth navigation experience",
        "Professional presentation"
      ],
      icon: Code,
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-red-400/20 to-pink-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="group">
                  <div className="h-full p-6 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium border border-gray-300/50 hover:shadow-md transition-shadow duration-200"
                          >
                            {tech}
                          </span>
                        ))}
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

export default ProjectsSection;
