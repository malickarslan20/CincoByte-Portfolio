import React from 'react';
import { Code, Smartphone, Globe, BarChart, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-blue-600" size={48} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      icon: <Smartphone className="text-emerald-600" size={48} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: <Globe className="text-purple-600" size={48} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      features: ['Digital Consulting', 'Technology Roadmap', 'Process Optimization', 'Change Management']
    },
    {
      icon: <BarChart className="text-yellow-600" size={48} />,
      title: 'Analytics & SEO',
      description: 'Data-driven insights and search engine optimization to maximize your online presence.',
      features: ['SEO Optimization', 'Google Analytics', 'Performance Tracking', 'Conversion Optimization']
    },
    {
      icon: <Shield className="text-red-600" size={48} />,
      title: 'Security Solutions',
      description: 'Robust security measures to protect your digital assets and user data.',
      features: ['Security Audits', 'Data Protection', 'Compliance', 'Risk Assessment']
    },
    {
      icon: <Headphones className="text-indigo-600" size={48} />,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance to ensure peak performance.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions tailored to meet your unique business needs 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;