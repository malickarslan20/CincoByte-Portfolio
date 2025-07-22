import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: <Target className="text-blue-600" size={48} />,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business objectives and drive measurable results.'
    },
    {
      icon: <Users className="text-emerald-600" size={48} />,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships through exceptional service.'
    },
    {
      icon: <Award className="text-yellow-600" size={48} />,
      title: 'Quality First',
      description: 'We maintain the highest standards in every project, ensuring excellence in design and development.'
    },
    {
      icon: <Zap className="text-purple-600" size={48} />,
      title: 'Innovation',
      description: 'We stay ahead of trends and technologies to deliver cutting-edge solutions for modern challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About InnovateCorp
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions and exceptional user experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;