import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: ['300% increase in sales', '50% faster load times', '95% user satisfaction']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive healthcare app connecting patients with doctors, featuring appointment scheduling and telemedicine capabilities.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'MongoDB'],
      metrics: ['10K+ active users', '4.8/5 app rating', '40% reduction in wait times']
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An enterprise-grade financial analytics dashboard providing real-time insights and predictive analytics for investment firms.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'AWS'],
      metrics: ['60% faster reporting', '99.9% uptime', '200+ daily active users']
    },
    {
      title: 'Smart IoT Platform',
      category: 'IoT Solution',
      image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An IoT management platform for smart buildings, enabling remote monitoring and control of various systems.',
      technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB'],
      metrics: ['30% energy savings', '500+ devices managed', '24/7 monitoring']
    },
    {
      title: 'Educational Platform',
      category: 'E-Learning',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive online learning platform with interactive courses, progress tracking, and AI-powered recommendations.',
      technologies: ['Next.js', 'GraphQL', 'TensorFlow', 'Docker'],
      metrics: ['50K+ students', '90% completion rate', '4.9/5 course rating']
    },
    {
      title: 'Logistics Management',
      category: 'Enterprise Software',
      image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A complete logistics management system with route optimization, real-time tracking, and automated reporting.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Google Maps API'],
      metrics: ['25% cost reduction', '99% delivery accuracy', '50+ fleet vehicles']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our recent projects and the impact we've made for businesses across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;