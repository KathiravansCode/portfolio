import React from 'react'

const Home = () => {
  return (
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
  )
}

export default Home
