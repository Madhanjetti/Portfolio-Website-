
import React from 'react';
import { ExternalLink, Github, Shield, Briefcase, TrendingUp, Home } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security of Cyber Physical Systems Using Machine Learning Algorthim",
      description: "Cyber-physical systems (CPSs) integrate computing and communication capabilities to monitor and control physical processes..",
      tech: ["Python", "Django-ORM", "JavaScript", "CSS", "HTML", "MySQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "JobConnect: Full Stack Job Posting & Search Portal",
      description: "A dynamic web application built with Java Spring Boot and ReactJS that allows companies to post job openings and candidates to search and apply seamlessly. Integrated with MySQL and REST APIs for efficient data handling and user management.",
      tech: ["React", "Java", "REST APIs", "Mysql","SpringBoot","JPA"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Credit Card Fraud Detection",
      description: "A machine learning model to detect fraudulent transactions, integrating data visualization and comprehensive analysis.",
      tech: ["Python", "Machine Learning", "Data Visualization", " Flask","CSS" , "HTML"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-green-500 to-emerald-500"
    },
    {
      
      title: "Snake & Ladder: Interactive Board Game with React",
      description: "A classic Snake and Ladder game reimagined using ReactJS, featuring smooth UI, dynamic dice rolls, and real-time player movement for an engaging gaming experience.",
      tech: [ "React", " Vue.js"," Tailwind CSS"," Bootstrap", "Figma"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications that showcase my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm`}>
                  {project.icon}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tech}
                    </span>
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

export default Projects;
