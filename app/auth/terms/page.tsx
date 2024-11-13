import React from 'react';
import Link from 'next/link'
const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">        
        <div className="w-full flex">
          <h1 className="text-3xl font-bold mb-4 text-green-800">Terms of Service for Ourt Website</h1>
        </div>

        <p className="mb-4 text-base">
          Welcome to the website. Please read these terms of service carefully before using the website. By using the website, you agree to be bound by these terms of service. If you do not agree to these terms of service, you may not use the website. These terms of service govern your use of the website and all services provided by the website. If you do not agree to these terms of service, you may not use the website.
        </p>

        <div className="pb-5">
          <h2 className="font-bold text-orange-700 dark:text-orange-300">General</h2>
          
          <ul className="mt-4">
            <li className="list-disc ml-5 mb-4">
              <p className="text-base">
                By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </li>

            <li className="list-disc ml-5">
              <p className="text-base">
                We reserve the right to change these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service. Any updates will be notified via email.
              </p>
            </li>
          </ul>
        </div>
        <Link href={"/auth/signup"}>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">signUp Page</button>
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
