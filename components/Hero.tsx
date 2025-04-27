// components/Hero.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useScroll, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Create refs for scroll-triggered animations
  const heroRef = useRef(null);
  const videoSectionRef = useRef(null);
  const companiesRef = useRef(null);
  
  // Check if elements are in view
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoSectionRef, { once: true, amount: 0.3 });
  const isCompaniesInView = useInView(companiesRef, { once: true, amount: 0.3 });
  
  // Subtle scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  
  // Fade in animation for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom cubic bezier for smooth easing
      }
    }
  };
  
  // Staggered container animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };
  
  // Subtle background animation
  const backgroundGlow = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: 0.8,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Clean hover animation for buttons
  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-24 overflow-hidden">
      {/* Refined background elements with subtle animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute -top-48 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          variants={backgroundGlow}
          initial="initial"
          animate="animate"
          style={{ opacity: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"
          variants={backgroundGlow}
          initial="initial"
          animate="animate"
          style={{ opacity: 0.3, animationDelay: "-2s" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <motion.div 
            ref={heroRef}
            className="max-w-3xl mx-auto text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeInUp} 
              className="inline-block bg-blue-50 border border-blue-100 text-blue-700 font-medium px-4 py-1 my-10  rounded-full mb-6"
            >
              Business Automation Reimagined
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
            >
              Automate, Streamline, and Scale Your Business
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Focus on strategic growth while Invero handles your repetitive tasks through intelligent automation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link href="/signup" className="w-full block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all flex items-center justify-center">
                  Start Free Trial
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.button 
                onClick={() => setVideoPlaying(true)} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-700 font-medium px-8 py-3 border border-gray-300 bg-white/90 rounded-lg transition-all"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-blue-600" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Video Section with elegant reveal animation */}
          <motion.div
            ref={videoSectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
            className="relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-xl border border-gray-200/50"
          >
            <div className="w-full h-full flex items-center justify-center aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="relative w-full h-full">
                {/* Video overlay with play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm text-white z-10">
                  {!videoPlaying && (
                    <motion.button
                      onClick={() => setVideoPlaying(true)}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { delay: 0.3 }
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
                        animate={{ 
                          boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 12px rgba(59, 130, 246, 0)"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 text-white ml-1" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  )}
                </div>
                
                {/* Video content */}
                <AnimatePresence>
                  {videoPlaying && (
                    <motion.div 
                      className="absolute inset-0 z-20 bg-black flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-lg">Video would play here</span>
                      <motion.button 
                        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1"
                        onClick={() => setVideoPlaying(false)}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Video thumbnail with subtle hover effect */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img 
                    src="/api/placeholder/1200/675" 
                    alt="Invero Dashboard Preview" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Companies section with clean fade-in animation */}
          <motion.div 
            ref={companiesRef}
            className="mt-16 md:mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isCompaniesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <p className="text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
                <motion.div 
                  key={index} 
                  className="h-8 w-32 bg-white/80 rounded-md flex items-center justify-center text-gray-600 font-medium shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCompaniesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;