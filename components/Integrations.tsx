import { motion } from "framer-motion";

const Integrations: React.FC = () => {
  const integrations = [
    { name: "SAP", category: "ERP" },
    { name: "Oracle NetSuite", category: "ERP" },
    { name: "Microsoft Dynamics", category: "ERP" },
    { name: "Salesforce", category: "CRM" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Slack", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft 365", category: "Productivity" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600">
            Invero connects with your existing tech ecosystem to ensure
            consistent data flow across your entire organization.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-medium">{integration.name}</h3>
                  <span className="text-xs text-gray-500 mt-1">
                    {integration.category}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3">
                    Custom Integration API
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Need to connect with a specialized system? Our robust API
                    makes custom integrations straightforward and reliable.
                  </p>
                  <a
                    href="/docs/api"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    View API Documentation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-gray-800">
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
