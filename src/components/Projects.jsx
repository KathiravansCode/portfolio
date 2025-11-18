import React from 'react'

const Projects = () => {
  return (
    <div>
       <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
