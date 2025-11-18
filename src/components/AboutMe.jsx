import React from 'react'

const AboutMe = () => {
  return (
    <div>
       <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">🎓 Education</h3>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">High School</h4>
                  <p className="text-gray-400">Your School Name | Year - Year</p>
                  <p>Percentage/CGPA: XX%</p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Undergraduate (UG)</h4>
                  <p className="text-gray-400">Bachelor's in Computer Science/Engineering</p>
                  <p className="text-gray-400">Your University | Year - Year</p>
                  <p>CGPA: X.X</p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Postgraduate (PG)</h4>
                  <p className="text-gray-400">Master's in Computer Applications/Engineering</p>
                  <p className="text-gray-400">Your University | Year - Year</p>
                  <p>CGPA: X.X</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">💼 Current Pursuit</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Currently enrolled in an intensive Java Developer Course at a leading EdTech platform, 
                focusing on advanced Java concepts, Spring Framework, Microservices, and industry best practices. 
                Committed to continuous learning and staying updated with the latest technologies in software development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
