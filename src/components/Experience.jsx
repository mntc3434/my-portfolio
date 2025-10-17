 import { motion } from 'framer-motion';
....
const experienceData = [
  {
    id: 1,
    role: "Intern",
    company: "Kuraz Tech",
    period: "2024",
    location: "Ethiopia",
    description: [
      "Contributed to the development of software, websites, and mobile apps",
      "Worked on an entrepreneur-investor connection platform",
      "Received certificate for completion"
    ]
  },
 {
  id: 2,
  role: "AI Engineer Intern",
  company: "iCog Labs",
  period: "September 2025 – Present",
  location: "Ethiopia",
  description: [
    "Working on the ECAN (Economic Attention Network) project at iCog Labs",
    "Gaining hands-on experience in artificial intelligence research and development",
    "Collaborating with senior engineers to enhance system design and performance"
  ]
}

];

const educationData = [
  {
    id: 1,
    degree: "BSc Computer Science",
    institution: "Haramaya University",
    period: "May 2022 – June 2025",
    description: [
      
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-500"></div>
              
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 pl-16 timeline-item"
                >
                  <div className="glass-card p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-1">{exp.role} - {exp.company}</h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">Education</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-500"></div>
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 pl-16 timeline-item"
                >
                  <div className="glass-card p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
