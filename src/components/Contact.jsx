import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  <Phone className="text-purple-400 flex-shrink-0" size={20} />
                  <span>+91 XXXXX XXXXX</span>
                </a>
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base break-all">
                  <Mail className="text-purple-400 flex-shrink-0" size={20} />
                  <span>your.email@example.com</span>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base break-all">
                  <Github className="text-purple-400 flex-shrink-0" size={20} />
                  <span>github.com/yourusername</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base break-all">
                  <Linkedin className="text-purple-400 flex-shrink-0" size={20} />
                  <span>linkedin.com/in/yourusername</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
