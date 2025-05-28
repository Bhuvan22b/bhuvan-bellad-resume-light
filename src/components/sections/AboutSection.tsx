
const AboutSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/3d81d3b8-a800-4c68-a378-4ebc722318b7.png" 
            alt="Bhuvan Bellad"
            className="w-48 h-48 rounded-lg object-cover shadow-lg border-4 border-blue-100"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Hello! I'm Bhuvan Bellad, a passionate Computer Science Engineering student at RV University, 
              currently in my 2nd year (2023 batch, graduating in 2027). I have a strong foundation in 
              programming languages and web technologies, with hands-on experience in building innovative projects.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm particularly interested in AI/ML, web development, and digital transformation technologies. 
              My goal is to leverage technology to create meaningful solutions that can make a positive impact 
              on society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
