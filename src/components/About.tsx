
import React from 'react';
import { GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm a Computer Science-Cyber Security graduate with a passion for creating digital experiences 
              that make a difference. My journey in tech started with curiosity and has evolved 
              into a commitment to building solutions that are not just functional, but truly impactful.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Educational Foundation</h3>
                  <p className="text-gray-300">
                    Strong computer science background with focus on software engineering, 
                    data structures, and system design principles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Expertise</h3>
                  <p className="text-gray-300">
                    Specialized in full-stack development with expertise in modern frameworks, 
                    database design, and creating scalable, maintainable applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-pink-500 rounded-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Passion for Quality</h3>
                  <p className="text-gray-300">
                    Committed to writing clean, efficient code and creating user experiences 
                    that are both beautiful and accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What Drives Me</h3>
                  <p className="text-gray-300">
                    "I believe that great software isn't just about the code—it's about 
                    understanding people, solving real problems, and creating experiences 
                    that users genuinely love."
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">5+</div>
                    <div className="text-sm text-gray-400">Technologies Mastered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-400">Learning Mindset</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
