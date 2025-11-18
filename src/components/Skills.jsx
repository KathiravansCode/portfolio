import React from 'react'

const Skills = () => {
  return (
     <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 text-center transform transition-all hover:scale-110 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{skill.icon}</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Skills
