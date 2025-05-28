
import { Mail, Phone, Github, Linkedin, MessageCircle, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhuvanbellad@gmail.com",
      href: "mailto:bhuvanbellad@gmail.com",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9380825846",
      href: "tel:+919380825846",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Bhuvan22b",
      href: "https://github.com/Bhuvan22b",
      gradient: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-50 to-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bhuvan-bellad-426894299",
      href: "https://www.linkedin.com/in/bhuvan-bellad-426894299/",
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100"
    }
  ];

  return (
    <section className="relative">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-pink-400/20 to-red-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group transform transition-all duration-300 hover:scale-105"
                >
                  <div className={`p-6 bg-gradient-to-r ${contact.bgGradient} rounded-2xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${contact.gradient} opacity-10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 text-lg mb-1 group-hover:text-gray-900 transition-colors">
                          {contact.label}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed break-all">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Based in India</span>
              </div>
              <p className="text-gray-600">
                Open to opportunities and collaborations worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
