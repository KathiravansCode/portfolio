import React from 'react'
import { useState } from 'react';
function Portfolio() {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:your.email@example.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const openResume = () => {
    // Replace with your actual resume URL
    window.open('https://drive.google.com/file/d/your-resume-link', '_blank');
  };

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Git', icon: '📦' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Spring', icon: '🍃' },
    { name: 'Hibernate', icon: '💾' },
    { name: 'Servlets', icon: '🔧' },
    { name: 'JSP', icon: '📄' },
    { name: 'JDBC', icon: '🔌' }
  ];

  const projects = [
    {
      title: 'Food Delivery App',
      description: 'A full-featured food delivery application with restaurant browsing, cart management, and order tracking.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
      link: '#'
    },
    {
      title: 'Recipe Book Application',
      description: 'A digital recipe management system allowing users to browse, save, and share their favorite recipes.',
      technologies: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      link: '#'
    }
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Your Name
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'skills', 'projects', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all ${
                  activeSection === section
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {section === 'about' ? 'About Me' : section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {['home', 'skills', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left py-2 transition-all ${
                    activeSection === section
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-300'
                  }`}
                >
                  {section === 'about' ? 'About Me' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Your Name</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Passionate Full Stack Developer | Java Enthusiast | React Specialist
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            I'm a dedicated developer with expertise in building modern web applications using React, Java, and JavaScript. 
            Currently pursuing advanced training in Java development while creating innovative solutions that combine elegant 
            design with powerful functionality.
          </p>
          <button
            onClick={openResume}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            View My Resume
          </button>
        </div>
      </section>
    </div>
    </div>
 )
}

export default Portfolio
