
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <GraduationCap className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">Bachelor of Engineering - Computer Science</h3>
          <p className="text-blue-600 font-medium">RV University</p>
          <div className="flex items-center mt-2 text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>2023 - 2027 (Expected)</span>
          </div>
          <p className="text-gray-600 mt-2">Currently in 2nd year, focusing on core computer science subjects and practical applications.</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
