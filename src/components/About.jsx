import { motion } from 'framer-motion';
...
const About = () => {
  const personalDetails = [
    { label: "Full Name", value: "Mentesinot Getu Mulatu" },
    { label: "Gender", value: "Male" },
    { label: "Address", value: "Addis Ababa" },
    { label: "Telephone", value: "+251-962-79-81-55" },
    { label: "E-mail", value: "mnte3434@gmail.com" },
    { label: "Nationality", value: "Ethiopian" },
  ];

  const languages = [
    { name: "English", proficiency: "Proficient" },
    { name: "Amharic", proficiency: "Native" },
    { name: "Oromo", proficiency: "Proficient" },
  ];

  const certifications = [
    "Internship Certificate - Kuraz Tech",
    "Engagement Certificate - Haramaya University Computing and Informatics Association",
    "Recommendation Letters from instructors recognizing teamwork, and commitment",
    "Program completion certificate from Udacity for a course Programming Fundamentals"
  ];

  const personalAttributes = [
    "Fast learner with a passion for new technologies",
    "Strong problem-solving and critical thinking skills",
    "Enjoys teamwork, communication, and creative collaboration",
    "Hobbies include playing guitar, video games, and building simple projects"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="glass-card p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                I'm a passionate Software Engineer based in Addis Ababa, Ethiopia
              </h3>
              <p className="mb-4">
                With expertise in multiple programming languages and frameworks, I specialize in creating responsive, user-friendly applications using modern technologies like Flutter, .NET Core, and Laravel.
              </p>
              <p className="mb-4">
                My journey in tech started when I was studying Computer Science at Haramaya University. Since then, I've worked on various projects including mobile apps, web applications, and AI integrations.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me playing guitar, enjoying video games, or working on personal projects that challenge my skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Languages</h4>
                <ul className="space-y-2">
                  {languages.map((lang, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{lang.name}</span>
                      <span className="text-blue-500">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Certifications</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h4 className="text-xl font-semibold mb-4">Personal Details</h4>
              <div className="space-y-4">
                {personalDetails.map((detail, index) => (
                  <div key={index}>
                    <p className="font-medium text-blue-500">{detail.label}:</p>
                    <p>{detail.value}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold mt-8 mb-4">Personal Attributes</h4>
              <ul className="list-disc pl-5 space-y-2">
                {personalAttributes.map((attr, index) => (
                  <li key={index}>{attr}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;