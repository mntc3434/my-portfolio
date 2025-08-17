import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Img1 from '../assets/prject1.png';
import Img2 from '../assets/project2.png';
import Img3 from '../assets/project3.png';
import Img4 from '../assets/project4.png';
import Img5 from '../assets/project5.png';
import Img6 from '../assets/project6.png';
const projects = [
  {
    id: 1,
    title: 'Investor and Entrepreneur Hub (Hasab)',
    description: 'Collaborated in a team to develop a platform that connects entrepreneurs with investors. Developed the entire mobile application and contributed to backend integration.',
    tags: ['Flutter', 'Laravel', 'REST API'],
    github: 'https://github.com/Project-Kuraz-Group-8/E-and-I-Mobile-App',
    demo: '#',
    image: Img1,
  },
  {
    id: 2,
    title: 'Farmer Marketplace for East Hararge',
    description: 'Designed and developed the full-stack web application independently. Helps farmers to advertise and sell their products with integrated payment gateway.',
    tags: ['.NET Core MVC', 'SQL Server', 'Chapa API'],
    github: 'https://github.com/mntc3434/Farmer-MP',
    demo: '#',
    image: Img2,
  },
  {
    id: 3,
    title: 'Flash Group Chat App',
    description: 'A real-time group chat application built with Flutter and Firebase, featuring instant messaging, user authentication, and media sharing.',
    tags: ['Flutter', 'Firebase', 'Real-time'],
    github: 'https://github.com/mntc3434/flash_group_chat',
    demo: '#',
    image: Img3,
  },
  {
    id: 4,
    title: 'Sentiment Analysis Project',
    description: 'Natural Language Processing application that analyzes sentiment from text inputs using machine learning techniques.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/mntc3434/NLP',
    demo: '#',
    image: Img4,
  },
  {
    id: 5,
    title: 'Art Gallery Simulation',
    description: 'A 3D art gallery simulation built with C++ and OpenGL, allowing users to virtually walk through a gallery and view artwork in an immersive environment.',
    tags: ['C++', 'OpenGL', '3D Graphics'],
    github: 'https://github.com/mntc3434/computer_graph/blob/main/ArtG_simulation.cpp',
    demo: '#',
    image: Img5,
  },
  {
    id: 6,
    title: 'News App (Mobile)',
    description: 'A mobile news application built with Java that fetches data from the Open News API, featuring categorized news, search functionality, and bookmarking.',
    tags: ['Java', 'Android', 'REST API', 'Open News API'],
    github: 'https://github.com/mntc3434/News-App',
    demo: '#',
    image: Img6,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my notable projects. More available on my GitHub.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mntc3434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 dark:text-white rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;