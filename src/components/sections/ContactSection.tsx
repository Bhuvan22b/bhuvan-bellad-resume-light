
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhuvanbellad@gmail.com",
      href: "mailto:bhuvanbellad@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9380825846",
      href: "tel:+919380825846"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Bhuvan22b",
      href: "https://github.com/Bhuvan22b"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bhuvan-bellad-426894299",
      href: "https://www.linkedin.com/in/bhuvan-bellad-426894299/"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{contact.label}</p>
                <p className="text-gray-600 text-sm">{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
