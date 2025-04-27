// File: src/pages/index.tsx

"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

export default function OverviewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define navigation items to avoid repetition
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'quickstart', label: 'Quick Start Guide' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'benefits', label: 'Business Benefits' },
    { id: 'integrations', label: 'Integrations' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Mexaly Documentation | Nurvid</title>
        <meta name="description" content="Complete documentation for Mexaly - The Business Automation Tool by Nurvid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isDarkMode={isDarkMode} />

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className={`flex-1 flex flex-col min-h-0 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-xl font-bold">
                <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mexaly</span> Docs
              </span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location?.hash === `#${item.id}` || (!location?.hash && item.id === 'overview')
                      ? isDarkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-blue-100 text-blue-900'
                      : isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <header className={`sticky top-0 z-10 flex-shrink-0 flex h-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-end">
            <div className="ml-4 flex items-center">
              <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${isDarkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Overview section */}
              <section id="overview" className="mb-12 scroll-mt-16">
                <div className="text-center mb-10">
                  <h1 className={`text-4xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
                    Mexaly <span className="text-blue-600 dark:text-blue-400">Documentation</span>
                  </h1>
                  <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Business Automation Tool 📦 🚀 🔄
                  </p>
                </div>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300`}>
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    What is Mexaly?
                  </h2>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Mexaly is designed to help organizations streamline their operations, reduce manual work, and enhance productivity through automation. By automating repetitive tasks and complex workflows, businesses can focus on strategic activities, innovate more quickly, and improve their bottom line.
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    By implementing Mexaly as a business automation tool, companies can integrate different workflows into one seamless system. Whether it's inventory management, customer service, finance, or human resources, Mexaly provides an interconnected platform that automates critical business processes and frees up time for your team to focus on strategic growth.
                  </p>
                </div>
              </section>

              {/* Features section */}
              <section id="features" className="mb-12 scroll-mt-16">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Key Features 🚀
                </h2>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    📦 Core Supply Chain Capabilities
                  </h3>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li><strong>Real-time Inventory Tracking 📊:</strong> Monitor stock levels across multiple locations in real-time</li>
                    <li><strong>Shipment Monitoring & Location Intelligence 🚚:</strong> Track shipments with GPS precision</li>
                    <li><strong>Supply Chain Risk Management ⚠️:</strong> Identify and mitigate potential disruptions</li>
                    <li><strong>Predictive Analytics and Demand Forecasting 🔮:</strong> Optimize inventory levels with AI-driven predictions</li>
                    <li><strong>AI-Powered Anomaly Detection 🤖:</strong> Automatically identify unusual patterns requiring attention</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    💼 Business Process Automation
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Mexaly extends beyond inventory to automate key business functions:
                  </p>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li><strong>Sales & CRM Automation 💼:</strong> Streamline customer management, lead tracking, and sales workflows</li>
                    <li><strong>Marketing Automation 📣:</strong> Simplify email campaigns, social media scheduling, and analytics</li>
                    <li><strong>HR & Payroll Automation 👥:</strong> Manage employee records, payroll processing, and compliance</li>
                    <li><strong>Finance & Accounting 💵:</strong> Automate invoicing, budgeting, financial reporting, and reconciliation</li>
                    <li><strong>Legal & Compliance ⚖️:</strong> Automate document management, compliance checks, and audit processes</li>
                  </ul>
                </div>
              </section>

              {/* Quick Start section */}
              <section id="quickstart" className="mb-12 scroll-mt-16">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Start Guide 🚀
                </h2>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Requirements
                  </h3>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li>Docker & Docker Compose installed</li>
                    <li>Rust toolchain (if you want to develop backend locally)</li>
                    <li>Node.js 18+ (for frontend development)</li>
                  </ul>
                  
                  <h3 className={`text-xl font-semibold my-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Running with Docker
                  </h3>
                  <div className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-sm overflow-x-auto`}>
                    git clone https://github.com/your-org/mexaly.git<br />
                    cd mexaly<br />
                    docker-compose up --build
                  </div>
                  <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Access the dashboard at http://localhost:3000.
                  </p>
                </div>
              </section>

              {/* Architecture section */}
              <section id="architecture" className="mb-12 scroll-mt-16">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Architecture Overview 🧩
                </h2>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <div className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-sm overflow-x-auto`}>
                    [IoT Devices / ERP Systems / External APIs]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                    API Gateway → Message Queue → Rust Core Services (Inventory, Supply Chain, Analytics)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                    Databases (PostgreSQL + Caching Layer)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                    GraphQL API + WebSocket Server<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                    Next.js Frontend (Server Components)
                  </div>
                  
                  <h3 className={`text-xl font-semibold my-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tech Stack
                  </h3>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li><strong>Backend:</strong> Rust 🦀 + SeaORM + PostgreSQL 🐘</li>
                    <li><strong>Containerization:</strong> Docker 🐳 (Primary Deployment)</li>
                    <li><strong>Frontend:</strong> Next.js + Tailwind CSS</li>
                    <li><strong>Messaging:</strong> MQTT, WebSockets</li>
                    <li><strong>External Integrations:</strong> SAP, Oracle NetSuite, Weather APIs, Logistics APIs</li>
                  </ul>
                </div>
              </section>

              {/* Business Benefits section */}
              <section id="benefits" className="mb-12 scroll-mt-16">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Business Benefits 💼
                </h2>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li><strong>Increased Productivity ⚡:</strong> Automate routine tasks to focus on strategic initiatives</li>
                    <li><strong>Enhanced Accuracy ✅:</strong> Minimize errors through consistent automated processes</li>
                    <li><strong>Cost Reduction 💰:</strong> Lower operational expenses by streamlining workflows</li>
                    <li><strong>Improved Scalability 📈:</strong> Support business growth without proportional resource increases</li>
                    <li><strong>Data-Driven Decisions 🧠:</strong> Access real-time insights for more informed decision-making</li>
                    <li><strong>Compliance Assurance ⚖️:</strong> Maintain regulatory compliance through automated checks</li>
                    <li><strong>Customer Satisfaction 😊:</strong> Deliver faster, more accurate service to customers</li>
                  </ul>
                </div>
              </section>

              {/* Integrations section */}
              <section id="integrations" className="mb-12 scroll-mt-16">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Seamless Integrations 🔄
                </h2>
                
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 transition-all duration-300 hover:shadow-xl`}>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Mexaly connects with your existing tech ecosystem through:
                  </p>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li>🔄 Standard ERP connectors (SAP, Oracle NetSuite, Microsoft Dynamics)</li>
                    <li>🔌 REST/GraphQL APIs for custom integrations</li>
                    <li>📡 IoT device protocols (MQTT, CoAP)</li>
                    <li>🗄️ Data lake/warehouse integrations</li>
                    <li>🧩 Legacy system adapters</li>
                    <li>🤝 Cross-functional data sharing between departments</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Built with ❤️ by Nurvid &copy; {new Date().getFullYear()} | <a href="#" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Contact Support</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}