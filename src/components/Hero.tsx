import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 text-white px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Hello, I'm Madhan Kumar Jetti
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay-1">
              Computer Science Graduate & Full-Stack Developer
            </p>
            <p className="text-lg mb-12 text-gray-400 leading-relaxed animate-fade-in-delay-2">
              Passionate about building clean, intuitive, and high-performing digital experiences. 
              I specialize in crafting applications that not only look great but deliver real value.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-12 animate-fade-in-delay-3">
              <a href="https://github.com/Madhanjetti" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/madhan-jettikumar/" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="yadavmadhan456@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <Avatar className="w-90 h-94 md:w-90 md:h-90 lg:w-96 lg:h-106 ring-4 ring-white/20 shadow-3xl">
              <AvatarImage 
                src="./img/PP1.png" 
                alt="MJ"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
               
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default Hero;
