import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-gray-400"
          >
            Mintesinot Getu
          </motion.a>
          
          <div className="flex space-x-6 mb-8">
            <motion.a
              href="https://github.com/mntc3434"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://t.me/mnte3434"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-2xl"
            >
              <FaTelegram />
            </motion.a>
          </div>
          
          <p className="text-gray-400 text-center mb-6">
            © {currentYear} Mintesinot Getu Mulatu. All rights reserved
          </p>
          
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
