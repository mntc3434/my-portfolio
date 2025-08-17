import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      skills: [
        { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
        { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
        { name: "Dart", icon: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000" },
        { name: "C#", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
        { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
        { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
        { name: "C", icon: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" }
      ]
    },
    {
      name: "Web",
      icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
      skills: [
        { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
        { name: "RESTful API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
        { name: "Laravel", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" }, // Note: Using PHP icon as placeholder
        { name: ".NET Framework with MVC", icon: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" }, // Using C# icon
        { name: "Entity Framework", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" } // Using C# icon
      ]
    },
    {
      name: "Databases",
      icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
      skills: [
        { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
        { name: "SQL Server", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
        { name: "Firebase", icon: "https://img.icons8.com/?size=100&id=87330&format=png&color=000000" },
        { name: "Postgresql", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" }
      ]
    },
    {
      name: "Mobile Application",
      icon: "https://cdn-icons-png.flaticon.com/512/3447/3447558.png",
      skills: [
        { name: "Flutter", icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000" }
      ]
    },
    {
      name: "Tools",
      icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
      skills: [
        { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png" },
        { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
        { name: "Visual Studio", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
        { name: "VS Code", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" } // Same as Visual Studio
      ]
    },
    {
      name: "Technologies",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      skills: [
        { name: "NLP", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png" },
        { name: "AI", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "Machine Learning", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "AI integration", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }
      ]
    },
    {
      name: "Hardware",
      icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
      skills: [
        { name: "Full hardware maintenance", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" }
      ]
    },
    {
      name: "Other",
      icon: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
      skills: [
        { name: "Chapa Payment Integration", icon: "https://cdn-icons-png.flaticon.com/512/2489/2489876.png" },
        { name: "Networking", icon: "https://cdn-icons-png.flaticon.com/512/2285/2285535.png" },
        { name: "Microsoft office tools", icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
  <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
    Technologies I've worked with across different domains
  </p>
</motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 dark:bg-gray-700 rounded-lg mr-3">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-600 rounded-lg shadow-sm mr-3">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;