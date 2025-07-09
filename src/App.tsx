import React, { useEffect, useState } from 'react';
import { Rocket, Instagram, Linkedin, Star, Sparkles } from 'lucide-react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

function App() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${2 + star.speed}s infinite alternate`
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-white shadow-sm"></div>
          </div>
        ))}
      </div>

      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Floating Astronaut */}
        <div className="relative mb-8">
          <div 
            className="astronaut-container"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative group">
              {/* Profile Photo Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl animate-float border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <img 
                    src="/passport photo black .jpg" 
                    alt="Vishvesh Arvadiya"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Cosmic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating Cosmic Particles */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50"></div>
              <div className="absolute -top-2 -right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50"></div>
              <div className="absolute -bottom-4 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50"></div>
              <div className="absolute top-1/4 -left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/3 -right-8 w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
            Vishvesh Arvadiya
          </h1>
          <div className="relative">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide">
              Devops & Cyber Security Explorer
            </p>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Portfolio Link */}
          <a
            href="https://vishvesharvadiya.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                <Rocket className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transform group-hover:rotate-12 transition-all duration-300" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">Portfolio</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Explore my work</p>
              </div>
            </div>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/vishvesh_arvadiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-colors duration-300">
                <Instagram className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transform group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">Instagram</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Creative journey</p>
              </div>
            </div>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/vishvesh-arvadiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-6 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500/30 transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transform group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">LinkedIn</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Professional network</p>
              </div>
            </div>
          </a>
        </div>

        {/* Floating Quote */}
        <div className="mt-16 text-center max-w-2xl">
          <blockquote className="text-lg sm:text-xl text-gray-300 italic font-light">
            "Crafting digital experiences that bridge creativity and security, 
            one pixel at a time in the infinite cosmos of technology."
          </blockquote>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-blue-400/30 opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-purple-400/30 opacity-50"></div>
    </div>
  );
}

export default App;
