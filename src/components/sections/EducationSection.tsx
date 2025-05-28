
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-red-600 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-red-600 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="group">
            <div className="p-8 bg-gradient-to-r from-indigo-50/80 to-red-50/80 rounded-2xl border border-indigo-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-red-500/20 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <div className="p-4 bg-gradient-to-r from-indigo-500 to-red-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    Bachelor of Engineering - Computer Science
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                    <p className="text-indigo-600 font-semibold text-lg">RV University</p>
                  </div>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">2023 - 2027 (Expected)</span>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                      <span className="text-green-700 font-semibold text-sm">Currently in 2nd Year</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl border border-gray-200/50">
                    <p className="text-gray-700 leading-relaxed">
                      Focusing on core computer science subjects including data structures, algorithms, 
                      software engineering, and practical applications in AI/ML and web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
