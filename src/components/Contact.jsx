import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegram, FaGithub } from 'react-icons/fa';

// Initialize EmailJS with your Public Key (User ID)
emailjs.init('xwI9b59aomNJrLKNw'); // Replace with your actual public key

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    emailjs
      .sendForm(
        'service_qokn5wj', // Replace with your service ID
        'template_3j4plhh', // Replace with your template ID
        form.current,
        'xwI9b59aomNJrLKNw'   // Replace with your public key
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('Email send failed:', error);
          setSubmitStatus('error');
          setErrorMessage(error.text || 'Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage('');
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+251 962798155</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>mnte3434@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <FaTelegram size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Telegram</h4>
                  <p>@mnte3434</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p>github.com/mntc3434</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium w-full hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;