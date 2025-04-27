import { motion } from 'framer-motion'

interface Industry {
  icon: string;
  name: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: "🏥",
    name: "Healthcare",
    description: "Streamline patient data processing, appointment scheduling, and resource allocation."
  },
  {
    icon: "🛒",
    name: "Retail",
    description: "Optimize inventory management, order processing, and enhance customer experience."
  },
  {
    icon: "🎓",
    name: "Education",
    description: "Efficiently manage student records, scheduling, and assessment processes."
  },
  {
    icon: "⚙️",
    name: "Manufacturing",
    description: "Improve production planning, quality control, and maintenance scheduling."
  },
  {
    icon: "🚚",
    name: "Logistics",
    description: "Enhance route optimization, fleet management, and delivery tracking."
  },
  {
    icon: "🔒",
    name: "Cybersecurity",
    description: "Bolster threat detection, incident response, and compliance monitoring."
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
          <p className="text-lg text-gray-600">Invero adapts to the unique needs of your industry with specialized automation solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries