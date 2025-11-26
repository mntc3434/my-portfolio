import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/profile3.jpg';
import resume from '../assets/resume.pdf';
import { useState, useEffect } from 'react';

const Header = ({ setActiveSection }) => {
  // Typing animation state
  const [displayText, setDisplayText] = useState("");
  const fullName = "Mintesinot Getu";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullName.length) {
        setDisplayText(fullName.substring(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        setTypingComplete(true);
        timeout = setTimeout(() => {
          setTypingComplete(false);
          setDisplayText("");
          currentIndex = 0;
          typeText();
        }, 2000);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);

  // Points for the connected sticks animation (simplified version)
  const points = [
    { x: 15, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 40 },
    { x: 85, y: 60 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:to-gray-800">
      {/* Subtle background animation similar to About page */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        {points.map((point, index) => (
          <motion.div
            key={`point-${index}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/50 dark:bg-purple-400/50"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5
            }}
          />
        ))}
        
        {/* Connecting lines */}
        {points.slice(0, -1).map((point, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute h-px bg-blue-400/30 dark:bg-purple-400/30"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${points[index+1].x - point.x}%`,
              transformOrigin: 'left center'
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img
              src={profileImg}
              alt="Mentesinot Getu Mulatu"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'top center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-blue-500">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8,
                  delay: typingComplete ? 0 : 0.2
                }}
                className="ml-0.5"
              >
                {typingComplete ? '' : '|'}
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Software Engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300"
          >
            I build exceptional digital experiences with modern technologies. Passionate about AI, mobile development, and creating solutions that make an impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:bg-gray-900"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-white rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center md:justify-start space-x-6"
          >
            <motion.a 
              whileHover={{ y: -5 }}
              href="https://github.com/mntc3434" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <FaGithub className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              href="https://t.me/mnteGt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <FaTelegram className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              href= {resume}
              download 
              className="flex items-center group"
            >
              <FaFileDownload className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-6 border-4 border-blue-500 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
