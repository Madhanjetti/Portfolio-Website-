
import React from 'react';
import { Database, Globe, Palette, Server, GitBranch, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design",
      skills: ["HTML", "CSS", "JavaScript", "ReactJs","Bootstrap","Tailwindcss","Git", "GitHub", "Netlify", "Vercel"],
      color: "from-blue-500 to-cyan-500"
    },
    
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database/Cloud",
      skills: ["MySQL", "MongoDB","AWS","Java Database Connectivity (JDBC)", "Data Modeling", "Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      skills: ["Node.js", "Express", "Java","Spring Boot", "REST APIs","Servlets"],
      color: "from-orange-500 to-red-500"
    },
  
  
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Skill Set
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 group-hover:bg-gray-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
