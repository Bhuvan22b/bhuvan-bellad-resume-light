
import { ExternalLink, Globe, User } from 'lucide-react';

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
      ]
    },
    {
      title: "Personal Resume Website",
      description: "A modern, responsive resume website built with React and TypeScript, featuring a clean design and smooth navigation.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Modern and responsive design",
        "Smooth navigation experience",
        "Professional presentation"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Key Highlights:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
