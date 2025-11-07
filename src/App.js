import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Menu, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Travel Route Planner",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive travel planning platform with secure user authentication and personalized route management. Features AI-powered recommendations and Docker containerization.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "GROQ LLM", "APIs"],
      media: [
        { type: 'image', src: '/images/travel-planner-1.jpg', alt: 'Travel Planner Home Page' },
        { type: 'image', src: '/images/travel-planner-2.jpg', alt: 'Route Planning Interface' },
        { type: 'image', src: '/images/travel-planner-3.jpg', alt: 'User Dashboard' },
        { type: 'video', src: '/videos/travel-planner-demo.mp4', alt: 'Travel Planner Demo Video' }
      ],
      githubUrl: "https://github.com/orsreshef/travel-planner",
      demoUrl: "https://travel-planner-demo.netlify.app",
      type: "web"
    },
    {
      id: 2,
      title: "AI Pacman Game",
      subtitle: "Pathfinding Algorithms Implementation",
      description: "Autonomous AI vs AI Pacman game implementing A* pathfinding for ghost agents and Limited-Depth BFS for Pacman navigation. Features anti-oscillation system to prevent infinite loops.",
      technologies: ["C++", "OpenGL", "A* Algorithm", "BFS", "AI Agents", "Game Development"],
      media: [
        { type: 'image', src: '/images/pacman-1.png', alt: 'Pacman Game Interface' },
        { type: 'image', src: '/images/pacman-2.jpg', alt: 'The Ghost' },
        { type: 'image', src: '/images/pacman-3.jpg', alt: 'Pacman and the Ghosts' },
        { type: 'video', src: '/videos/pacman-demo.mp4', alt: 'AI Pacman Gameplay Demo' }
      ],
      githubUrl: "https://github.com/orsreshef/ai-pacman-game",
      type: "game"
    },
    {
      id: 3,
      title: "Supermarket Management System",
      subtitle: "Object-Oriented Programming",
      description: "A comprehensive Buy & Sell system demonstrating advanced OOP concepts in Java. Focuses on clean architecture, design patterns, and maintainable code structure.",
      technologies: ["Java", "OOP", "Design Patterns", "Clean Architecture", "SOLID Principles"],
      media: [
        { type: 'image', src: '/images/supermarket-1.jpg', alt: 'Main Dashboard' },
        { type: 'image', src: '/images/supermarket-2.jpg', alt: 'Product Management' },
        { type: 'image', src: '/images/supermarket-3.jpg', alt: 'Sales Reports' },
        { type: 'video', src: '/videos/supermarket-demo.mp4', alt: 'System Overview Demo' }
      ],
      githubUrl: "https://github.com/orsreshef/supermarket-system",
      type: "application"
    },
    {
      id: 4,
      title: "Automated Travel Report Generator",
      subtitle: "Workflow Automation",
      description: "An automated system using N8N workflows to generate and email personalized travel reports. Demonstrates proficiency in API integration and workflow automation.",
      technologies: ["N8N", "JavaScript", "Airtable", "HTML", "OpenAI API", "Workflow Automation"],
      media: [
        { type: 'image', src: '/images/travel-reports-1.jpg', alt: 'N8N Workflow Design' },
        { type: 'image', src: '/images/travel-reports-2.jpg', alt: 'Generated Report Example' },
        { type: 'image', src: '/images/travel-reports-3.jpg', alt: 'Airtable Integration' },
        { type: 'video', src: '/videos/travel-reports-demo.mp4', alt: 'Workflow Automation Demo' }
      ],
      githubUrl: "https://github.com/orsreshef/travel-report-generator",
      type: "automation"
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "C#", "C++", "C"],
    "Frontend": ["React", "HTML5", "CSS", "Tailwind"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs"],
    "Database": ["MongoDB"],
    "AI/Algorithms": ["AI Game Development", "A* Pathfinding", "BFS/DFS", "Heuristic Search"],
    "Graphics & Gaming": ["OpenGL", "Unity3D"],
    "Tools & Platforms": ["Docker", "Git/GitHub", "Linux (Ubuntu)", "N8N"],
    "Specialties": ["Object-Oriented Programming", "Algorithms", "Web Development", "Security (JWT, Hashing)"]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MediaCarousel = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    const currentMedia = media[currentIndex];

    return (
      <div className="relative h-64 bg-sage-100 rounded-t-lg overflow-hidden group">
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.src} 
            alt={currentMedia.alt}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          <video 
            src={currentMedia.src}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        )}
                
        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous media"
            >
              <ChevronLeft size={18} className="text-sage-800" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next media"
            >
              <ChevronRight size={18} className="text-sage-800" />
            </button>
          </>
        )}
        
        {/* Media Type Indicator */}
        <div className="absolute top-3 left-3">
          {currentMedia.type === 'video' && (
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
              <Play size={12} />
              Video
            </span>
          )}
        </div>
        
        {/* Dots Indicator */}
        {media.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to media ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Media Counter */}
        <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {media.length}
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-cream-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-sage-200">
      <MediaCarousel media={project.media} />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-sage-900 mb-2">{project.title}</h3>
        <p className="text-sage-700 font-medium mb-3">{project.subtitle}</p>
        <p className="text-sage-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-sage-200 text-sage-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            Code
          </a>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="flex items-center gap-2 px-4 py-2 bg-earth-600 text-white rounded-lg hover:bg-earth-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-sage-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-sage-900">Or Reshef</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-sage-600' 
                      : 'text-sage-800 hover:text-sage-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-sage-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-sage-200">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 capitalize font-medium text-sage-800 hover:text-sage-600 hover:bg-sage-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-sage-900 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
              3rd year Computer Science student with hands-on experience in full-stack development 
              and a proven track record of building complete web applications from concept to deployment.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <a href="mailto:orsreshef@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/or-reshef-s" className="flex items-center gap-2 px-6 py-3 bg-earth-600 text-white rounded-lg hover:bg-earth-700 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-sage-200">
            <h3 className="text-2xl font-bold text-sage-900 mb-6">About Me</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sage-700 leading-relaxed mb-4">
                  I'm an autodidact Computer Science student with a passion for creating innovative solutions. 
                  My expertise spans full-stack development, with particular interest in frontend technologies 
                  and user experience design.
                </p>
                <p className="text-sage-700 leading-relaxed">
                  I'm drawn to design and visual elements, which naturally extends to my fascination with 
                  game development and computer graphics. I enjoy the challenge of bringing ideas to life 
                  through code and creating engaging user experiences.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-sage-900 mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-sage-800">B.Sc in Computer Science</h5>
                    <p className="text-sage-600">Afeka Academic College of Engineering</p>
                    <p className="text-sage-600">GPA: 85 | Oct 2023 - Present</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sage-800">Science Oriented High School Diploma</h5>
                    <p className="text-sage-600">Yigal Allon, Rishon Lezion</p>
                    <p className="text-sage-600">GPA: 113 | Sep 2017 - Jun 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sage-200">
              <div className="flex flex-wrap gap-4 text-sage-600">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Rishon Lezion, Israel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>054-7765189</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>orsreshef@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-sage-900 text-center mb-4">Featured Projects</h2>
          <p className="text-sage-700 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my work in full-stack development, AI algorithms, and game development. 
            Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-sage-900 text-center mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-lg border border-sage-200">
                <h3 className="text-lg font-semibold text-sage-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-sage-100 text-sage-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-sage-50 to-earth-50 rounded-xl p-8 border border-sage-200">
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Specialties & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sage-800 mb-2">High GPA Subjects (98+)</h4>
                <ul className="space-y-1 text-sage-700">
                  <li>• Object-Oriented Programming</li>
                  <li>• Algorithms & Data Structures</li>
                  <li>• Web Development & Security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sage-800 mb-2">Security & Best Practices</h4>
                <ul className="space-y-1 text-sage-700">
                  <li>• JWT Authentication</li>
                  <li>• Password Hashing</li>
                  <li>• Secure Programming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sage-900 mb-6">Let's Work Together</h2>
          <p className="text-xl text-sage-700 mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities in software development, particularly in frontend development, 
            full-stack roles, and game development. Let's discuss how I can contribute to your team!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:orsreshef@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-lg"
            >
              <Mail size={24} />
              orsreshef@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/or-reshef-s"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-earth-600 text-white rounded-lg hover:bg-earth-700 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
              LinkedIn Profile
            </a>
          </div>

          <div className="bg-sage-50 rounded-lg p-6 border border-sage-200">
            <h3 className="text-lg font-semibold text-sage-900 mb-4">Currently Looking For</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-sage-200 text-sage-800 rounded-full">Student Positions</span>
              <span className="px-4 py-2 bg-sage-200 text-sage-800 rounded-full">Frontend Development</span>
              <span className="px-4 py-2 bg-sage-200 text-sage-800 rounded-full">Full-Stack Roles</span>
              <span className="px-4 py-2 bg-sage-200 text-sage-800 rounded-full">Game Development</span>
              <span className="px-4 py-2 bg-sage-200 text-sage-800 rounded-full">Internships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sage-300">© 2025 Or Reshef. Built with React and deployed on GitHub Pages.</p>
          <p className="text-sage-400 mt-2">Passionate about creating innovative solutions through code.</p>
        </div>
      </footer>
      <style jsx>{`
        .bg-sage-50 { background-color: #f0f4f0; }
        .bg-sage-100 { background-color: #e1eae1; }
        .bg-sage-200 { background-color: #c3d5c3; }
        .bg-sage-600 { background-color: #4a7c59; }
        .bg-sage-700 { background-color: #3f6b4f; }
        .bg-sage-800 { background-color: #2f5142; }
        .bg-sage-900 { background-color: #1f3c2e; }
        .text-sage-300 { color: #a7c7ad; }
        .text-sage-400 { color: #8fb896; }
        .text-sage-600 { color: #4a7c59; }
        .text-sage-700 { color: #3f6b4f; }
        .text-sage-800 { color: #2f5142; }
        .text-sage-900 { color: #1f3c2e; }
        .border-sage-200 { border-color: #c3d5c3; }
        
        .bg-earth-50 { background-color: #faf8f3; }
        .bg-earth-600 { background-color: #8b6914; }
        .bg-earth-700 { background-color: #795c11; }
        
        .bg-cream-50 { background-color: #fefcf7; }
        .bg-cream-100 { background-color: #fdf9f0; }
        
        .hover\\:bg-sage-50:hover { background-color: #f0f4f0; }
        .hover\\:bg-sage-700:hover { background-color: #3f6b4f; }
        .hover\\:bg-earth-700:hover { background-color: #795c11; }
        .hover\\:text-sage-600:hover { color: #4a7c59; }
      `}</style>
    </div>
  );
};

export default Portfolio;
