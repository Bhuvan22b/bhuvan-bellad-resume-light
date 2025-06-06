
const AboutSection = () => {
  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-4 md:p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-pink-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold text-blue-600">Bhuvan Bellad</span>, a passionate Computer Science Engineering student at 
                <span className="font-semibold text-red-600"> RV University</span>, currently in my 2nd year (2023 batch, graduating in 2027). 
                I have a strong foundation in programming languages and web technologies, with hands-on experience in building innovative projects.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200/50">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                I'm particularly interested in <span className="font-semibold text-red-600">AI/ML</span>, 
                <span className="font-semibold text-blue-600"> web development</span>, and 
                <span className="font-semibold text-indigo-600"> digital transformation technologies</span>. 
                My goal is to leverage technology to create meaningful solutions that can make a positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
