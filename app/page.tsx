// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import FAQSection from '../components/Faqs';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      <Head>
        <title>Invero | Business Automation Platform</title>
        <meta name="description" content="Streamline operations, reduce manual work, and enhance productivity with Invero's business automation platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Features />
            <Benefits />
            <Testimonials />
            <FAQSection />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Home;