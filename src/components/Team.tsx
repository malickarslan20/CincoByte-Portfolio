import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
  gradient: string;
}

const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'Shayan Mirza',
      role: 'CEO & Co-Founder',
      image: '/images/Shayan.jpg',
      bio: 'Build powerful, scalable, and efficient solutions with Python.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Zia Ur Rehmman',
      role: 'Co-Founder & Web Developer with Django',
      image: '/images/Zia.jpg',
      bio: 'Full-stack architect passionate about scalable solutions with Django.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Kashif Ur Rehman',
      role: 'Senior MERN Developer',
      image: '/images/Kashif.jpg',
      bio: 'Senior developer with expertise in React, Node.js, and cloud architecture.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Sheryar Yousaf',
      role: 'Flutter Developer',
      image: '/images/Sheryar.jpg',
      bio: 'Build fast, beautiful, and cross-platform mobile apps with Flutter.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Malick Arslan',
      role: 'Frontend Developer',
      image: '/images/Arslan.jpg',
      bio: 'Craft responsive, user-friendly interfaces using modern frontend technologies like React, Vue, and Tailwind CSS.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Talha Ayyaz',
      role: 'Dart-Powered App Creator',
      image: '/images/Talha.jpg',
      bio: 'Create high-performance cross-platform apps using Flutter and Dart for seamless Android and iOS experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience and passion 
            for creating exceptional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="bg-white text-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                      <Linkedin size={16} />
                    </a>
                    <a href={member.social.twitter} className="bg-white text-slate-800 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-200">
                      <Twitter size={16} />
                    </a>
                    <a href={member.social.github} className="bg-white text-slate-800 p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
