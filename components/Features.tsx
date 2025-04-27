// components/Features.tsx
"use client"; // Add this for Next.js client components

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      icon: "📊",
      title: "Real-time Tracking",
      description: "Monitor inventory levels across all locations with comprehensive visibility and instant alerts.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "🚚",
      title: "Shipment Monitoring",
      description: "Track shipments with GPS precision and receive alerts for any delays or disruptions.",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: "⚠️",
      title: "Risk Management",
      description: "Identify and mitigate potential disruptions before they impact your supply chain.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: "🔮",
      title: "Predictive Analytics",
      description: "Optimize inventory levels with AI-driven predictions and demand forecasting.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: "🤖",
      title: "AI Anomaly Detection",
      description: "Automatically identify unusual patterns or behaviors requiring immediate attention.",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: "⛓️",
      title: "Blockchain Traceability",
      description: "Ensure complete transparency and auditability throughout your entire supply chain.",
      color: "from-amber-500 to-amber-700"
    }
  ];

  const businessProcesses = [
    { icon: "💼", label: "Sales & CRM", description: "Streamline customer relationship management" },
    { icon: "📣", label: "Marketing", description: "Automate campaigns and track engagement" },
    { icon: "👥", label: "HR & Payroll", description: "Simplify human resource management" },
    { icon: "💵", label: "Finance", description: "Optimize financial operations and reporting" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Invero combines cutting-edge technology with intuitive design to transform your operations and drive sustainable growth.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="backdrop-blur-lg bg-white/80 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {/* Background gradient that appears on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredFeature === index ? 0.05 : 0 }}
              />
              
              {/* Icon with animated container */}
              <motion.div 
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 mb-6 border border-blue-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-3xl">{feature.icon}</span>
              </motion.div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-transparent to-blue-50 rounded-tl-3xl" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-24 backdrop-blur-xl bg-gradient-to-r from-blue-50/90 to-indigo-50/90 rounded-3xl p-10 max-w-5xl mx-auto shadow-xl border border-blue-100/50"
        >
          <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Business Process Automation</h3>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Invero extends beyond inventory to automate key business functions, streamlining your entire operation with our unified platform.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessProcesses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center text-center h-full transition-all duration-300 border border-gray-100/80"
              >
                <motion.div 
                  className="text-3xl mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 w-12 h-12 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore All Features
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;